import React from 'react'

const SortComponent = () => {
  return (
    <div className='flex gap-2 text-sm '>
            <div className='sortIcons px-3 py-1 rounded-4xl'>All</div>
            <div className='sortIcons px-3 py-1 rounded-4xl'>Unread</div>
            <div className='sortIcons px-3 py-1 rounded-4xl'>Favourites</div>
            <div className='sortIcons px-3 py-1 rounded-4xl'>Groups</div>
    </div>
  )
}

export default SortComponent
