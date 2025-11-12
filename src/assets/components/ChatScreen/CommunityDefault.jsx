import React from 'react'

const CommunityDefault = () => {
  return (
    <div className=' h-screen w-full flex flex-col justify-around items-center'>
        <div className=' flex flex-col justify-center flex-1 gap-6 text-center px-6'>
            <div className='flex items-center justify-around mb-5'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="rgba(255,255,255,0.22)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z"></path></svg>
            </div>
            <div className='flex flex-col items-center justify-center text-center gap-5'>
                <span className='text-[#FAFAFA] font-light text-4xl'>Create communities</span>
                <span className='text-[#FFFFFF99] leading-snug text-sm w-140'>Bring members together in topic-based groups and easily send them admin announcements.</span>
            </div>

        </div>
        <div className=' gap-2 py-3 px-5 pb-9 w-full flex items-center justify-center text-[#FFFFFF99] text-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z"></path></svg>
            <span>
                Your personal messages in communities are end-to-end encrypted
            </span>
        </div>
    </div>
  )
}

export default CommunityDefault
