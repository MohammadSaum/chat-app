import React from 'react'

const CommunityPage = () => {
  return (
        <div className="text-white pt-5 px-5 pb-0 h-screen w-md shrink-0 overflow-auto flex flex-col bg-transparent">

        <div className="font-semibold text-xl h-13 w-full shrink-0 flex item-center justify-between ">
            <span>Communities</span>

            <button className=' flex justify-around items-center rounded-full transition-colors duration-200 hover:bg-[#FFFFFF1A] cursor-pointer w-10 h-10'
                title="Add Community">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></svg>
            </button>
        </div>

        <div className='h-full -mx-2 minScrollBar overflow-y-auto'>
            <div className='h-17 w-full flex gap-5 py-2 cursor-pointer hover:bg-[#FFFFFF1D] rounded-xl px-2  duration-200 transition-colors'>
            <div className='bg-[#21C063] px-3 rounded-xl flex items-center justify-around'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)" height='27' width='27'><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z"></path></svg>
            </div>
            <div className='flex items-center'>
                New community
            </div>
            </div>
        </div>
    </div>
  )
}

export default CommunityPage
