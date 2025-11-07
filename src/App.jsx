import { useState } from 'react'
import Sidebar from '../src/assets/components/sideBar/SideBar'
import ChatPage from './assets/components/chatWindow/ChatPage/ChatWindow' 
import StatusPage from './assets/components/chatWindow/StatusPage/StatusPage'
import ChannelPage from './assets/components/chatWindow/ChannelPage/ChannelPage'
import CommunityPage from './assets/components/chatWindow/CommunityPage/CommunityPage'
import SettingPage from './assets/components/chatWindow/SettingPage/SettingPage'
import AdminPage from './assets/components/chatWindow/AdminPage/AdminPage'


const App = () => {

    const [active, setActive] = useState('Chat')

  return (
    <div className='mainScreen shrink-0 overflow-y-auto h-screen w-full flex hide-scrollbar'>
      <Sidebar active={active} onSelect={setActive} />
      <main className="flex-1  bg-[#161717] overflow-auto">
        {active === 'Chat' && <ChatPage />}
        {active === 'Status' && <StatusPage />}
        {active === 'Channel' && <ChannelPage />}
        {active === 'Community' && <CommunityPage />}
        {active === 'Setting' && <SettingPage />}
        {active === 'AdminProfile' && <AdminPage />}
      </main>
    </div>
  )
}

export default App
