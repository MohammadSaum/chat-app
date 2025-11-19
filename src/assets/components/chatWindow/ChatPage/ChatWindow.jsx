import Header from './Header'
import SearchComponent from './SearchComponent'
import SortComponent from './SortComponent'
import MessagingContact from './MessagingContact'

const ChatWindow = () => {
  return (
    <div className=' flex flex-col shrink-0 overflow-hidden border-r-2 border-[#202020] h-screen w-md text-white font-semibold text-2xl p-5 pb-0'>
        <Header/>
        <SearchComponent/>

        <div className=""> 
        <SortComponent/>
        </div>

            <div className='flex-1 mt-3 overflow-y-auto minScrollBar font-normal text-sm'>
            <MessagingContact/>
            </div>

         
    </div>
  )
}

export default ChatWindow
