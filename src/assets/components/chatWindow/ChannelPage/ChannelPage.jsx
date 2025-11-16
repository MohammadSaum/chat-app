import axios from 'axios'
import { useEffect, useState } from 'react'

const ChannelPage = () => {
    const [channel, setChannel] = useState([])
    useEffect(()=>{
        const data = async () => {
        try {
        const res = await axios.get('https://randomuser.me/api/?results=5')
        setChannel(res.data.results)
        console.log(res.data.results)
        } catch (error) {
        console.error('error occurred:', error)
        }
        }
        data()
    } , [])

    const channelCards = () =>{
        return(
            <div>

            </div>
        )
    }

    return (
        <div>
            <div className=' w-md h-screen pt-5 px-5 pb-0 shrink-0 overflow-auto flex flex-col '>
                <div className=' flex justify-between font-semibold text-xl h-13 w-full shrink-0 text-[#FAFAFA]'>
                    <span>Channels</span>
                
                    <div className='flex gap-4 '>
                
                        <div className='flex justify-center items-center duration-200 cursor-pointer hover:bg-[#FFFFFF1D] h-10 w-10 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></svg>
                        </div>
                    </div>
                </div>

                <div className=' flex flex-col items-center gap-1 '>
                    <span className='text-[#FAFAFA]  text-xl'>Stay updated on your favourite topics</span>
                    <span className='text-[#FFFFFF99]'>Find channels to follow below</span>
                </div>

                <div>channelCards</div>

                <div className=' h-20 flex flex-col gap-2 py-5'>
                    <button className=' rounded-2xl border-2 border-[#202020] py-2 text-[#21C063] text-sm font-medium cursor-pointer hover:bg-[#103529]'>Discover more</button>
                    <button className=' rounded-2xl border-2 border-[#202020] py-2 text-[#21C063] text-sm font-medium cursor-pointer hover:bg-[#103529]'>Create channel</button>
                </div>
            </div>
        </div>
    )
}

export default ChannelPage
