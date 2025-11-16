import React from 'react'

const StatusDefault = () => {
  return (
    <div className=' h-screen w-full flex flex-col justify-around items-center'>
        <div className=' flex flex-col justify-center flex-1 gap-6 text-center px-6'>
            <div className='flex items-center justify-around mb-5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="54" height="54" fill="rgba(255,255,255,0.22)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.9999 2.04938L11 4.06188C7.05371 4.55396 4 7.92036 4 12C4 16.4183 7.58172 20 12 20C13.8487 20 15.5509 19.3729 16.9055 18.3199L18.3289 19.7428C16.605 21.1536 14.4014 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81468 5.94662 2.55115 10.9999 2.04938ZM21.9506 13.0001C21.7509 15.0111 20.9555 16.8468 19.7433 18.3283L18.3199 16.9055C19.1801 15.799 19.756 14.4606 19.9381 12.9999L21.9506 13.0001ZM13.0011 2.04948C17.725 2.51902 21.4815 6.27589 21.9506 10.9999L19.9381 11C19.4869 7.38162 16.6192 4.51364 13.001 4.062L13.0011 2.04948Z"></path></svg>           
            </div>
            <div className='flex flex-col items-center justify-center text-center gap-5'>
                <span className='text-[#FAFAFA] font-light text-4xl'>Share status updates</span>
                <span className='text-[#FFFFFF99] leading-snug text-sm w-140'>Share photos, videos and text that disappear after 24 hours.</span>
            </div>

        </div>
        <div className=' gap-2 py-3 px-5 pb-9 w-full flex items-center justify-center text-[#FFFFFF99] text-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z"></path></svg>
            <span>
                Your status updates are end-to-end encrypted
            </span>
        </div>
    </div>
  )
}

export default StatusDefault
