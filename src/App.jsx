import { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from '../src/assets/components/sideBar/SideBar'
import ChatPage from './assets/components/chatWindow/ChatPage/ChatPage.jsx' 
import StatusPage from './assets/components/chatWindow/StatusPage/StatusPage'
import ChannelPage from './assets/components/chatWindow/ChannelPage/ChannelPage'
import CommunityPage from './assets/components/chatWindow/CommunityPage/CommunityPage'
import SettingPage from './assets/components/chatWindow/SettingPage/SettingPage'
import AdminPage from './assets/components/chatWindow/AdminPage/AdminPage'
import AdminProfileDefault from './assets/components/ChatScreen/AdminProfileDefault'
import SettingDefault from './assets/components/ChatScreen/SettingDefault'
import CommunityDefault from './assets/components/ChatScreen/CommunityDefault'
import StatusDefault from './assets/components/ChatScreen/StatusDefault.jsx'
import ChannelDefault from './assets/components/ChatScreen/ChannelDefault.jsx'


const App = () => {

    const [active, setActive] = useState('Chat')
    const [contacts, setContacts] = useState([])
    const [channels, setChannels] = useState([])
    const [loadingContacts, setLoadingContacts] = useState(true)
    const [loadingChannels, setLoadingChannels] = useState(true)

    // Fetch contacts once on component mount
    useEffect(() => {
        let cancelled = false
        const fetchContacts = async () => {
            try {
                setLoadingContacts(true)
                const res = await axios.get('https://randomuser.me/api/?results=15')
                if (cancelled) return
                const mapped = res.data.results.map((u) => ({
                    id: u.login?.uuid,
                    name: u.name,
                    picture: u.picture,
                    email: u.email,
                    lastMessage: 'Tap to start a chat',
                    lastAt: null,
                    raw: u,
                }))
                setContacts(mapped)
            } catch (err) {
                console.error('failed to fetch contacts', err)
            } finally {
                if (!cancelled) setLoadingContacts(false)
            }
        }
        fetchContacts()
        return () => {
            cancelled = true
        }
    }, [])

    // Fetch channels once on component mount
    useEffect(() => {
        let cancelled = false
        const fetchChannels = async () => {
            try {
                setLoadingChannels(true)
                const res = await axios.get('https://randomuser.me/api/?results=5')
                if (cancelled) return
                setChannels(res.data.results)
            } catch (error) {
                console.error('error occurred:', error)
            } finally {
                if (!cancelled) setLoadingChannels(false)
            }
        }
        fetchChannels()
        return () => {
            cancelled = true
        }
    }, [])

  return (
    <div className='mainScreen shrink-0 overflow-y-auto h-screen w-full flex '>
      <Sidebar active={active} onSelect={setActive} />
      <main className="flex-1  bg-[#161717] overflow-auto hide-scrollbar">
        {active === 'Chat' && <ChatPage contacts={contacts} loadingContacts={loadingContacts} setContacts={setContacts} />}
       
        {active === 'Channel' && (
            <div className='flex h-full w-full'>
                <ChannelPage channels={channels} loadingChannels={loadingChannels} />
                <ChannelDefault/>
                </div>
                )}
        {active === 'Status' && (
            <div className='flex h-full w-full'>
            <StatusPage />
            <StatusDefault/>
            
            </div>)}
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
