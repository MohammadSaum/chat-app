import 'remixicon/fonts/remixicon.css'
import Chat from './chat'
import Status from './Status'
import Channel from './Channel'
import Community from './Community'
import Setting from './Setting'
import AdminProfile from './AdminProfile'

const Sidebar = () => {
  return (
    <div className='sidebar min-h-screen w-17 bg-black border-r border-gray-500 p-3 flex flex-col'>
        <div className='flex flex-col gap-4 border-b border-gray-500 pb-3 pt-2'>
            <Chat/>
            <Status/>
            <Channel/>
            <Community/>
        </div>

        <div className='mt-auto flex flex-col gap-4 pt-4'>
            <Setting/>
            <AdminProfile/>
        </div>
    </div>
  )
}

export default Sidebar
