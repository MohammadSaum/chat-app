import Sidebar from './assets/components/sideBar/SideBar'
import ChatWindow from './assets/components/chatWindow/ChatWindow'

const App = () => {
  return (
    <div className='mainScreen h-screen w-full flex'>
      <Sidebar />
      <ChatWindow/>
    </div>
  )
}

export default App
