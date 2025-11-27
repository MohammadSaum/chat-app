import { useState, useRef, useEffect } from 'react'

const Header = ({ onSelectChats }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 })
  const dropdownRef = useRef(null)
  const toggleRef = useRef(null)

  const handleLogout = () => {
    // Add logout logic here
    console.log('User logged out')
    setShowDropdown(false)
    // You can add actual logout logic like clearing auth tokens, etc.
  }

  const handleSelect = () => {
    // This will enable select mode
    onSelectChats?.()
    setShowDropdown(false)
  }

  const toggleDropdown = () => {
    if (!toggleRef.current) return setShowDropdown(prev => !prev)
    const rect = toggleRef.current.getBoundingClientRect()
    // compute position: place dropdown under the toggle, avoid viewport overflow
    const top = rect.bottom + 6
    const dropdownW = 160
    const left = Math.min(rect.left, Math.max(8, window.innerWidth - dropdownW - 8))
    setMenuPos({ top, left })
    setShowDropdown(prev => !prev)
  }

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const onDocClick = (e) => {
      // if dropdown isn't open, nothing to do
      if (!showDropdown) return

      // if click is inside the dropdown or toggle button, ignore
      const target = e.target
      if (dropdownRef.current?.contains(target) || toggleRef.current?.contains(target)) {
        return
      }

      setShowDropdown(false)
    }

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowDropdown(false)
      }
    }

    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [showDropdown])

  return (
    <div className='flex justify-between relative'>
      WhatsApp
      <div className='flex gap-4'>
        <div className='flex justify-center items-center duration-200 cursor-pointer hover:bg-[#FFFFFF1D] h-10 w-10 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" height='26' viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15.9991 2.99995C19.3131 2.99995 22 5.69516 22 8.9941V21H8.00099C4.68693 21 2.00001 18.3048 2.00001 15.0058V10.6572C2.62568 10.8784 3.29859 11 4.00001 11C7.31372 11 10 8.31367 10 4.99995C10 4.29854 9.87844 3.62562 9.65724 2.99995H15.9991ZM8.00002 13H10V11H8.00002V13ZM14 13H16V11H14V13ZM3.52931 1.31928C3.70584 0.89349 4.29418 0.893492 4.47071 1.31928L4.72364 1.93061C5.15555 2.9734 5.96155 3.80612 6.97462 4.25679L7.6924 4.57612C8.10268 4.75894 8.10263 5.35615 7.6924 5.53902L6.93263 5.87691C5.94498 6.31619 5.15339 7.11941 4.71388 8.12789L4.46681 8.69332C4.28636 9.10745 3.71366 9.10745 3.53321 8.69332L3.28614 8.12789C2.84661 7.11942 2.05506 6.31619 1.06739 5.87691L0.307623 5.53902C-0.102517 5.35615 -0.102565 4.75894 0.307623 4.57612L1.0254 4.25679C2.03845 3.80613 2.84446 2.97343 3.27638 1.93061L3.52931 1.31928Z"></path></svg>
        </div>

        <div className='relative'>
          <div 
            ref={toggleRef}
            className='flex justify-center items-center duration-200 cursor-pointer hover:bg-[#FFFFFF1D] h-10 w-10 rounded-full'
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={showDropdown}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height='24' viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
          </div>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div
              ref={dropdownRef}
              onClick={(e) => e.stopPropagation()} // prevent document click handler from firing when clicking inside
              style={{ position: 'fixed', top: menuPos.top + 'px', left: menuPos.left + 'px' }}
              className='text-base font-medium mt-2 w-30 bg-[#1F1F1F] rounded-lg shadow-lg border border-[#FFFFFF1D] z-50'
            >
              <button
                type="button"
                onClick={handleSelect}
                className='w-full text-left px-4 py-3 text-[#FAFAFA] hover:bg-[#FFFFFF1D] duration-150 flex items-center gap-3 rounded-t-lg'
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>
                Select
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className='w-full text-left px-4 py-3 text-[#FF6B6B] hover:bg-[#FFFFFF1D] duration-150 flex items-center gap-3 rounded-b-lg'
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 11H13V13H5V16L0 12L5 8V11ZM20 3C21.1 3 22 3.9 22 5V19C22 20.1 21.1 21 20 21H11V19H20V5H11V3H20Z"></path></svg>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
