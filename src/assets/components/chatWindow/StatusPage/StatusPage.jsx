import React from 'react'

const StatusPage = () => {
  return (
    <div className=' w-md h-screen pt-5 px-5 pb-0 shrink-0 overflow-auto flex flex-col '>
        <div className='flex justify-between font-semibold text-xl h-13 w-full shrink-0 text-[#FAFAFA]'>
        Status
        
        <div className='flex gap-4 '>
        
            <div className='flex justify-center items-center duration-200 cursor-pointer hover:bg-[#FFFFFF1D] h-10 w-10 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></svg>
            </div>

            <div className='flex justify-center items-center duration-200 cursor-pointer hover:bg-[#FFFFFF1D] h-10 w-10 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" height='24'viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg></div>
            </div>

        </div>

        <div className='h-full -mx-2 minScrollBar overflow-y-auto '>

            <div className='h-18 w-full flex gap-3 py-2 cursor-pointer hover:bg-[#FFFFFF1D] rounded-xl px-2 duration-200 transition-colors'>

                <div className=' relative px-3 py-2 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm>
                '>
                    <svg  className='rounded-full'
                    xmlns="http://www.w3.org/2000/svg" width='31' height='36' fill='rgb(128, 137, 143)' viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>

                    
                    <svg className="absolute bottom-0 right-0 translate-x-1 translate-y-1" 
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21" fill="rgba(33,192,99,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path></svg>
                </div>

                <div className=' w-full flex flex-col justify-center'>
                    <span className='text-[#FAFAFA]'>My status</span>
                    <span className='text-[#FFFFFF99] text-sm'>Click to add status update</span>

                </div>
            </div>

        </div>
    </div>
)
}

export default StatusPage
