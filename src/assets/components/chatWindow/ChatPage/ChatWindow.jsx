import Header from './Header'
import SearchComponent from './SearchComponent'
import SortComponent from './SortComponent'
import MessagingContactList from './MessagingContactList'
import { useRef, useState, useEffect } from 'react'

/*
  Props:
    - contacts (optional) : array of contact objects (parent-owned)
    - selectedId
    - onSelect (or onSelectContact) : fn(contact)
    - formatTimestamp (optional) : fn(ts) -> string
*/
const ChatWindow = ({ contacts, selectedId, onSelectContact, onSelect, formatTimestamp }) => {
  const contactListRef = useRef(null)
  const [selectModeActive, setSelectModeActive] = useState(false)
  const [selectedCount, setSelectedCount] = useState(0)
  const [showSelectBarDropdown, setShowSelectBarDropdown] = useState(false)
  const selectBarToggleRef = useRef(null)
  const [selectBarDropdownPos, setSelectBarDropdownPos] = useState({ top: 0, left: 0 })

  const forwardSelect = (contact) => {
    const handler = onSelectContact || onSelect
    if (typeof handler === 'function') handler(contact)
  }

  const handleSelectChats = () => {
    if (contactListRef.current) {
      contactListRef.current.enableSelectMode()
    }
  }

  const handleOnSelectModeChange = ({ isSelectMode, selectedCount }) => {
    setSelectModeActive(Boolean(isSelectMode))
    setSelectedCount(Number(selectedCount || 0))
    if (!isSelectMode) setShowSelectBarDropdown(false)
  }

  const handleSelectBarToggle = () => {
    if (!selectBarToggleRef.current) return setShowSelectBarDropdown(prev => !prev)
    const rect = selectBarToggleRef.current.getBoundingClientRect()
    // place dropdown under toggle, adjust left to avoid clipping when too far right
    const top = rect.bottom + 6
    const dropdownW = 160
    const left = Math.min(rect.left, Math.max(8, window.innerWidth - dropdownW - 8))
    setSelectBarDropdownPos({ top, left })
    setShowSelectBarDropdown(prev => !prev)
  }

  const onPinFromBar = () => {
    setShowSelectBarDropdown(false)
    contactListRef.current?.pinSelected()
  }

  const onDeleteFromBar = () => {
    setShowSelectBarDropdown(false)
    contactListRef.current?.deleteSelected()
  }

  const onCloseSelectModeFromBar = () => {
    setShowSelectBarDropdown(false)
    contactListRef.current?.disableSelectMode()
  }

  // Close select bar dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const onDocClick = (e) => {
      if (!showSelectBarDropdown) return
      if (selectBarToggleRef.current?.contains(e.target)) return
      setShowSelectBarDropdown(false)
    }

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setShowSelectBarDropdown(false)
    }

    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [showSelectBarDropdown])

  return (
    <div className='flex flex-col shrink-0 overflow-hidden border-r-2 border-[#202020] h-screen w-md text-white font-semibold text-2xl p-5 pb-0'>
      <Header onSelectChats={handleSelectChats} />
      <SearchComponent />
      <div>
        {selectModeActive ? (
          <div className='mb-3'>
            <div className='px-3 py-2 bg-[#202020] rounded-xl flex items-center justify-between'>
              <div className='text-[#FFFFFF99] font-medium text-base'>{selectedCount} selected</div>
              <div className='flex items-center gap-2'>
                <button
                  ref={selectBarToggleRef}
                  onClick={handleSelectBarToggle}
                  className='p-2 hover:bg-[#FFFFFF1D] rounded-lg duration-150'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height='20' viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
                </button>
                <button onClick={onCloseSelectModeFromBar} className='px-3 py-1 text-sm bg-[#FFFFFF1D] text-[#FAFAFA] rounded-lg hover:bg-[#FFFFFF2D] duration-150'>✕</button>
              </div>
            </div>
            {showSelectBarDropdown && (
              <div style={{ position: 'fixed', top: selectBarDropdownPos.top + 'px', left: selectBarDropdownPos.left + 'px' }} className='w-35 bg-[#1F1F1F] rounded-lg shadow-lg border border-[#FFFFFF1D] z-50 text-base font-normal'>
                <button onClick={onPinFromBar} className='w-full text-left px-4 py-1 text-[#FFFFFF99] hover:bg-[#FFFFFF1D] duration-150 flex items-center gap-3 border-b border-[#FFFFFF1D]'>Pin</button>
                <button onClick={onDeleteFromBar} className='w-full text-left px-4 py-1 text-[#FF6B6B] hover:bg-[#FFFFFF1D] duration-150 flex items-center gap-3'>Delete</button>
              </div>
            )}
          </div>
        ) : (
          <SortComponent />
        )}
      </div>

      <div className='flex-1 mt-3 -ml-2 overflow-y-auto hide-scrollbar font-normal text-sm'>
        <MessagingContactList
          ref={contactListRef}
          contacts={contacts}            // <-- pass parent-owned contacts (if any)
          selectedId={selectedId}
          onSelect={(contact) => forwardSelect(contact)}
          onSelectModeChange={handleOnSelectModeChange}
          formatTimestamp={formatTimestamp}
        />
      </div>
    </div>
  )
}

export default ChatWindow
