import axios from 'axios'
import { useEffect, useState } from 'react'


const MessagingContactList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const data = async () => {
      try {
        const res = await axios.get('https://randomuser.me/api/?results=15')
        setUsers(res.data.results)
      } catch (error) {
        console.error('error occurred:', error)
      }
    }
    data()
  }, [])

const MessagingContactCard = ({ user }) => {

  return (
    <div className='messagingContact rounded-xl flex h-16 pl-1 p-3 items-center hover:bg-gray-700 cursor-pointer mb-2 w-full shrink-0 duration-200'>
      <div className='w-15 h-13 flex rounded-full items-center mr-3 justify-center'>
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className='rounded-full w-12 h-12 object-cover'
        />
      </div>

      <div className='flex flex-col w-full min-w-0 justify-center'>
        <div className='flex h-7 w-full items-center justify-between'>
          <div className='truncate'>
            {user.name.first} {user.name.last}
          </div>
          <div className='duration shrink-0 text-xs'>Yesterday</div>
        </div>

        <div className='text-sm sent truncate'>
          {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, unde.'} 
        </div>
      </div>
    </div>
  )
}


  return (
    <div className='p-1'>
      {users.map((user, idx) => (
        <MessagingContactCard key={idx} user={user} />
      ))}
    </div>
  )
}

export default MessagingContactList
