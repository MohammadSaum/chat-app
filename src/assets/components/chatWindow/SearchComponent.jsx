import React from 'react'

const SearchComponent = () => {
  return (
    <div className=' h-13 w-full mt-3 '>
      <div className=' searchBar flex rounded-3xl h-10 w-full pt-2.5 gap-3 items-start pl-4 '>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(101,109,115,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>

        <textarea type='text' placeholder='Search or start a new chat' className='text-sm w-full font-normal border-none overflow-x-auto whitespace-nowrap resize-none hide-scrollbar outline-none'/>
      </div>
    </div>
  )
}

export default SearchComponent
