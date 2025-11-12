import { useState } from 'react'
import Sidebar from '../src/assets/components/sideBar/SideBar'
import ChatPage from './assets/components/chatWindow/ChatPage/ChatWindow' 
import StatusPage from './assets/components/chatWindow/StatusPage/StatusPage'
import ChannelPage from './assets/components/chatWindow/ChannelPage/ChannelPage'
import CommunityPage from './assets/components/chatWindow/CommunityPage/CommunityPage'
import SettingPage from './assets/components/chatWindow/SettingPage/SettingPage'
import AdminPage from './assets/components/chatWindow/AdminPage/AdminPage'
import Default from './assets/components/ChatScreen/Default'
import AdminProfileDefault from './assets/components/ChatScreen/AdminProfileDefault'
import SettingDefault from './assets/components/ChatScreen/SettingDefault'
import CommunityDefault from './assets/components/ChatScreen/CommunityDefault'


const App = () => {

    const [active, setActive] = useState('Chat')

  return (
    <div className='mainScreen shrink-0 overflow-y-auto h-screen w-full flex '>
      <Sidebar active={active} onSelect={setActive} />
      <main className="flex-1  bg-[#161717] overflow-auto hide-scrollbar">
        {active === 'Chat' && (
          <div className="flex w-full h-full">
            <ChatPage />
            <Default />
          </div>
        )}
       
        {active === 'Status' && <StatusPage />}
        {active === 'Channel' && <ChannelPage />}
        {active === 'Community' && (
            <div className='flex h-full w-full'>
            <CommunityPage />
            <CommunityDefault/>
            
            </div>)}

        {active === 'Setting' && (
            <div className='flex h-full w-full'>
            <SettingPage />
            <SettingDefault/>
            
            </div>)}
        {active === 'AdminProfile' && (
            <div className='flex h-full w-full'>
            <AdminPage />
            <AdminProfileDefault/>
            </div>)}
      </main>
    </div>
  )
}

export default App
