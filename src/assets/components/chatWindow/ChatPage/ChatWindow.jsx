import Header from './Header'
import SearchComponent from './SearchComponent'
import SortComponent from './SortComponent'
import MessagingContactList from './MessagingContactList'

const ChatWindow = ({ selectedId, onSelectContact, onSelect }) => {

    const forwardSelect = (contact) => {
    const handler = onSelectContact || onSelect
    if (typeof handler === 'function') {
      console.log('ChatWindow: forwarding select ->', contact?.id)
      handler(contact)
    } else {
      console.warn('ChatWindow: no select handler provided', { onSelectContact, onSelect })
    }
  }
  return (
    <div className='flex flex-col shrink-0 overflow-hidden border-r-2 border-[#202020] h-screen w-md text-white font-semibold text-2xl p-5 pb-0'>
      <Header />
      <SearchComponent />
      <div><SortComponent /></div>

      <div className='flex-1 mt-3 -ml-2 overflow-y-auto minScrollBar font-normal text-sm'>
        <MessagingContactList
          selectedId={selectedId}
          onSelect={(contact) => forwardSelect(contact)}
        />
      </div>
    </div>
  )
}


export default ChatWindow
