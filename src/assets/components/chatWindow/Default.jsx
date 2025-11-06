const Default = () => {
  return (
    <div className='flex w-full h-screen overflow-y-auto justify-center p-4 items-center hide-scrollbar' >
        <div className=' p-5 w-[400px] flex flex-col items-center gap-4 shadow-lg'>
            {/* Image */}
            <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 13V18.585L14.8284 16.7574L16.2426 18.1716L12 22.4142L7.75736 18.1716L9.17157 16.7574L11 18.585V13H13ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z"></path></svg>
            </div>

            {/* text */}
            <div className='text-center'>
                <h3 className='font-normal text-4xl whitespace-nowrap text-white'>
                    Download WhatsApp For Windows 
                </h3>
            </div>

            <div className='text-center'>
                <p className='text-gray-300 font-light'>
                    Make calls, share your screen and get a faster experience when you download the Windows app.
                </p>
            </div>

            {/* Button */}
            <div className='w-full justify-center flex '>
                <button className='bg-[#21C063] font-semibold cursor-pointer hover:bg-green-800 duration-200 active:scale-95 text-[#0A0A0A] px-7 py-3 rounded-3xl'>
                    Download
                </button>
            </div>
        </div>
    </div>
  )
}

export default Default
