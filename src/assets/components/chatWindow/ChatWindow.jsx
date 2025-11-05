import Header from './Header'
import SearchComponent from './SearchComponent'
import SortComponent from './SortComponent'
import MessagingContact from './MessagingContact'

const ChatWindow = () => {
  return (
    <div className='flex flex-col overflow-auto border-r border-gray-500 h-screen w-md text-white font-semibold text-2xl p-5 pb-0'>
        <Header/>
        <SearchComponent/>
        <SortComponent/>

            <div className='grow mt-2 overflow-y-auto bg-amber-600 hide-scrollbar'>
            <MessagingContact/>
            </div>

         
    </div>
  )
}

export default ChatWindow
