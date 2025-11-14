import React from 'react'

const StatusPage = () => {
  return (
    <div className=' w-md h-screen pt-5 px-5 pb-0 shrink-0 overflow-auto flex flex-col '>
      <div className=' flex justify-between font-semibold  text-xl h-13 w-full shrink-0 text-[#FAFAFA]'>
      Status
      <div className='flex gap-4 '>
        <div className='flex justify-center items-center duration-200 cursor-pointer hover:bg-gray-800 h-10 w-10 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></svg>
        </div>

        <div className='flex justify-center items-center duration-200 cursor-pointer hover:bg-gray-800 h-10 w-10 rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" height='24'viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg></div>
      </div>
    </div>
    </div>
  )
}

export default StatusPage
