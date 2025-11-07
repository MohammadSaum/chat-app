import Sidebar from './assets/components/sideBar/SideBar'
import ChatWindow from './assets/components/chatWindow/ChatPage/ChatWindow'
import Default from './assets/components/ChatScreen/Default'

const App = () => {
  return (
    <div className='mainScreen shrink-0 overflow-y-auto h-screen w-full flex hide-scrollbar'>
      <Sidebar />
      <Default/>
    </div>
  )
}

export default App
