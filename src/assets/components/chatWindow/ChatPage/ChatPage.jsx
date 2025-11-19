import ChatWindow from './ChatWindow.jsx'
import React, { useState } from 'react'
import ChatPanel from './ChatPanel.jsx'   
import Default from "../../ChatScreen/Default.jsx"


const ChatPage = () => {
  const [selectedContactId, setSelectedContactId] = useState(null)
  const [selectedContactObj, setSelectedContactObj] = useState(null)
  const [messagesCache, setMessagesCache] = useState({})


    const handleSelectContact = (contact) => {
  const id = contact?.id ?? contact?.login?.uuid ?? null
  setSelectedContactId(contact.id)
  setSelectedContactObj(contact)

}

  const handleSend = (contactId, text) => {
    setMessagesCache(prev => {
      const prevMsgs = prev[contactId] || []
      const newMsg = { id: Date.now(), fromMe: true, text }
      return { ...prev, [contactId]: [...prevMsgs, newMsg] }
    })
  }

  const currentMessages = messagesCache[selectedContactId] || []

  return (
    <div className="flex w-full h-full">
      <ChatWindow
        selectedId={selectedContactId}
        onSelect={handleSelectContact}
      />

      <div className="flex-1">
        {selectedContactObj ? (
          <ChatPanel
            contact={selectedContactObj}
            messages={currentMessages}
            onSend={(text) => handleSend(selectedContactId, text)}
          />
        ) : (
          <Default />
        )}
      </div>
    </div>
  )
}

export default ChatPage
