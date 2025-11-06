import axios from 'axios'
import AdminProfile from '../sideBar/AdminProfile'
import { useEffect, useState } from 'react'

const MessagingContact = () => {

    const [messageCard, setMessageCard] = useState([])

    const data = async() =>{
        try{
            const res = await axios.get('https://randomuser.me/api/?results=10')  
        setMessageCard(res.data.results)
        } catch (error){
            console.error('error occured: ', error)
        }
        
    }

    useEffect(()=>{
        data(),[]
    })

    let msgCardData;

    msgCardData = messageCard.map((elem,idx)=>{
        return
    })

    return (

        <div className='messagingContact rounded-xl flex h-16 pl-0 p-3 items-center hover:bg-gray-700 cursor-pointer mb-2 w-full shrink-0 duration-200'>
            <div className='w-15 h-13 flex rounded-full items-center mr-3 justify-center border border-gray-500'>
                <AdminProfile/>
            </div>

            <div className='flex flex-col w-full min-w-0 justify-center'>

                <div className='flex h-7 w-full items-center justify-between'>
                    <div className='truncate font-medium'>
                        Saum
                    </div>
                    
                    <div className='duration shrink-0 text-xs'>
                        Yesterday
                    </div>

                </div>

                {/* bottom */}
                <div className='text-sm sent truncate'>
                    Lorem ipsum dolor sit amet conse Lorem ipsum dolor sit amet consectetur.
                </div>
            </div>
            
        </div>
    )
}

export default MessagingContact
