import Header from './Header'
import SearchComponent from './SearchComponent'
import SortComponent from './SortComponent'
import MessagingContactList from './MessagingContactList'

/*
  Props:
    - contacts (optional) : array of contact objects (parent-owned)
    - selectedId
    - onSelect (or onSelectContact) : fn(contact)
    - formatTimestamp (optional) : fn(ts) -> string
*/
const ChatWindow = ({ contacts, selectedId, onSelectContact, onSelect, formatTimestamp }) => {
  const forwardSelect = (contact) => {
    const handler = onSelectContact || onSelect
    if (typeof handler === 'function') handler(contact)
  }

  return (
    <div className='flex flex-col shrink-0 overflow-hidden border-r-2 border-[#202020] h-screen w-md text-white font-semibold text-2xl p-5 pb-0'>
      <Header />
      <SearchComponent />
      <div><SortComponent /></div>

      <div className='flex-1 mt-3 -ml-2 overflow-y-auto hide-scrollbar font-normal text-sm'>
        <MessagingContactList
          contacts={contacts}            // <-- pass parent-owned contacts (if any)
          selectedId={selectedId}
          onSelect={(contact) => forwardSelect(contact)}
          formatTimestamp={formatTimestamp}
        />
      </div>
    </div>
  )
}

export default ChatWindow
