const SettingPage = () => {
    return (
        <div className='text-white pt-5 px-5 pb-0 h-screen w-md shrink-0 overflow-auto flex flex-col'>
            <div className='font-semibold text-xl h-13 w-full shrink-0 '>Settings</div>

            <div className=' h-13 w-full mt-1 '>
                <div className='searchBar flex rounded-3xl h-10 w-full pt-2.5 gap-3 items-start pl-4 '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>

                    <textarea type='text' placeholder='Search settings' className='text-sm w-full font-normal border-none overflow-x-auto whitespace-nowrap resize-none hide-scrollbar outline-none'/>
                </div>
            </div>

            <div className=' grow w-full mt-2'>

                <div className= 'flex items-start gap-3 border-b-2 pb-5 border-[#202020]'>
                    <div>
                        <div className=" p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80" fill="rgba(255,255,255,0.22)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path></svg>
                        </div>
                    </div>
                    <div className='pt-5 gap-1 flex flex-col'>
                        <div className='text-m'>Saum</div>
                        <div className='text-sm text-[#FFFFFF99]'>Battery about to die</div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SettingPage
