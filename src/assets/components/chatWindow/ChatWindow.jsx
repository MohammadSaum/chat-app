import React from 'react'
import Header from './Header'
import SearchComponent from './SearchComponent'
import SortComponent from './SortComponent'

const ChatWindow = () => {
  return (
    <div className='text-white font-semibold text-2xl border-r border-gray-500 h-full w-md p-5'>
      <Header/>
      <SearchComponent/>
      <SortComponent/>
    </div>
  )
}

export default ChatWindow
