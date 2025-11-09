const AdminPage = () => {
  return (
    <div className='flex flex-col shrink-0 overflow-auto  h-screen w-md text-white font-semibold text-xl p-5 pb-0'>
        Profile

        <div className=' mt-5 w-full'>
            <div className='w-full h-60 p-2 flex justify-around items-center '>
                <svg className='cursor-pointer'
                xmlns="http://www.w3.org/2000/svg" width='70' height='70' fill='rgb(128, 137, 143)' viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>
            </div>

            {/* Name */}
            <div className=' p-3 font-normal'>
                <div className="text-[#FFFFFF99] text-sm mb-2"
                    >Name
                </div>
                <div className=" text-[#FAFAFA] flex justify-between font-medium text-base">
                    Saum
                    <div>
                        <svg className='cursor-pointer'
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path></svg>
                    </div>
                </div>
            </div>

            {/* About */}
            <div className=' p-3 font-normal'>
                <div className="text-[#FFFFFF99] text-sm mb-2"
                    >About
                </div>
                <div className=" text-[#FAFAFA] flex justify-between font-medium text-base">
                    Battery about to die
                    <div>
                        <svg className='cursor-pointer'
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path></svg>
                    </div>
                </div>
            </div>

            {/* Phone */}
            <div className=' p-3 font-normal'>
                <div className="text-[#FFFFFF99] text-sm mb-2"
                    >Phone
                </div>
                <div className=" text-[#FAFAFA] flex justify-between font-medium text-base">
                    <div className=" flex gap-2">
                    <svg className='cursor-pointer'
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
                    +91234567890
                    </div>
                    
                    <div className="">
                        <svg className="cursor-pointer active:scale-95 duration-150 hover:bg-[#2B2A2A] rounded-full" 
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>

                    </div>
                </div>
            </div>

        </div>

    </div>
)
}

export default AdminPage
