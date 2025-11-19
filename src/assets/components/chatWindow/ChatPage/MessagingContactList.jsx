import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MessagingContactCard = ({ user, onClick, isActive }) => {
  return (
    <div
      role="button"
      onClick={() => onClick?.(user)}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick?.(user) }}
      className={`messagingContact rounded-xl flex h-16 pl-1 p-3 items-center cursor-pointer mb-2 w-full shrink-0 duration-200
        ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
    >
      <div className='w-15 h-13 flex rounded-full items-center mr-3 justify-center'>
        <img
          src={user.picture?.large ?? '/placeholder-avatar.png'}
          alt={`${user.name?.first ?? ''} ${user.name?.last ?? ''}`}
          className='rounded-full w-12 h-12 object-cover'
          onError={(e) => { e.currentTarget.src = '/placeholder-avatar.png' }}
        />
      </div>

      <div className='flex flex-col w-full min-w-0 justify-center'>
        <div className='flex h-7 w-full items-center justify-between'>
          <div className='truncate font-medium'>
            {user.name?.first ?? 'Unknown'}{user.name?.last ? ` ${user.name.last}` : ''}
          </div>
          <div className='duration shrink-0 text-xs text-gray-400'>Yesterday</div>
        </div>

        <div className='text-sm text-gray-300 truncate'>
          {user.lastMessage ?? 'Tap to start a chat'}
        </div>
      </div>
    </div>
  )
}

const MessagingContactList = ({ onSelect, selectedId }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    const fetchUsers = async () => {
      setLoading(true)
      try {
        const res = await axios.get('https://randomuser.me/api/?results=15')
        if (cancelled) return

        
        const mapped = res.data.results.map(u => ({
          id: u.login?.uuid,     
          name: u.name,
          picture: u.picture,
          email: u.email,
          lastMessage: 'Tap to start a chat',
          raw: u,
        }))

        setUsers(mapped)
      } catch (err) {
        if (!cancelled) setError(err)
        console.error('error occurred:', err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchUsers()
    return () => { cancelled = true }
  }, [])

  if (loading) return <div className="p-2 text-gray-400">Loading contacts…</div>
  if (error) return <div className="p-2 text-red-400">Failed to load contacts</div>

  return (
    <div className='p-1'>
      {users.map((user) => (
        <MessagingContactCard
          key={user.id}
          user={user}
          isActive={selectedId === user.id}
          onClick={() => {
            onSelect?.(user)} }
        />
      ))}
    </div>
  )
}

export default MessagingContactList
