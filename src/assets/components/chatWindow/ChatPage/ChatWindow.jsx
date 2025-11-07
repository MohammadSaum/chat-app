import Header from './Header'
import SearchComponent from './SearchComponent'
import SortComponent from './SortComponent'
import MessagingContact from './MessagingContact'
import Default from '../../ChatScreen/Default'

const ChatWindow = () => {
  return (
    <div className=' flex flex-col shrink-0 overflow-auto border-r border-gray-500 h-screen w-md text-white font-semibold text-2xl p-5 pb-0'>
        <Header/>
        <SearchComponent/>
        <SortComponent/>

            <div className='grow mt-3 overflow-y-auto hide-scrollbar font-normal text-sm'>
            <MessagingContact/>
            </div>

         
    </div>
  )
}

export default ChatWindow
