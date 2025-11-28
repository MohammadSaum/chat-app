// ChatPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import ChatWindow from "./ChatWindow.jsx";
import ChatPanel from "./ChatPanel.jsx";
import Default from "../../ChatScreen/Default.jsx";

/* timestamp formatter used in multiple places */
const formatTimestamp = (ts) => {
  if (!ts) return "";
  const d = new Date(ts);
  const now = new Date();

  const isToday =
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear();

  if (isToday) {
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);
  const isYesterday =
    d.getDate() === yesterday.getDate() &&
    d.getMonth() === yesterday.getMonth() &&
    d.getFullYear() === yesterday.getFullYear();

  if (isYesterday) return "Yesterday";

  return d.toLocaleDateString([], { day: "2-digit", month: "2-digit" });
};

const ChatPage = ({ contacts: propsContacts, loadingContacts: propsLoadingContacts, setContacts: propsSetContacts }) => {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [selectedContactObj, setSelectedContactObj] = useState(null);

  // messagesCache: { [contactId]: [msg, ...] }
  const [messagesCache, setMessagesCache] = useState({});

  // Use props contacts if provided, otherwise fallback to local state
  const [contacts, setContacts] = useState(propsContacts || []);
  const [loadingContacts, setLoadingContacts] = useState(propsLoadingContacts || true);

  // Update local state when props change
  useEffect(() => {
    if (propsContacts && propsContacts.length > 0) {
      setContacts(propsContacts);
    }
  }, [propsContacts]);

  useEffect(() => {
    if (typeof propsLoadingContacts !== 'undefined') {
      setLoadingContacts(propsLoadingContacts);
    }
  }, [propsLoadingContacts]);

  /* select a contact - keep selectedContactObj in sync with contacts state so previews reflect updates */
  const handleSelectContact = (contact) => {
    const id = contact?.id ?? contact?.login?.uuid ?? null;
    if (!id) return;
    setSelectedContactId(id);

    // prefer the canonical contact object from `contacts` state (so lastMessage etc are present)
    const canonical = contacts.find((c) => c.id === id);
    setSelectedContactObj(canonical ?? contact);
  };

  /* handleSend(contactId, payload)
     - payload can be a string (text) or a message object { id, text, fromMe, timestamp, ... }
  */
  const handleSend = (contactId, payload) => {
    if (!contactId) {
      console.warn("handleSend called without contactId");
      return;
    }

    const message =
      typeof payload === "string"
        ? {
            id: `local-${Date.now()}`,
            text: payload,
            fromMe: true,
            timestamp: Date.now(),
          }
        : {
            id: payload.id ?? `local-${Date.now()}`,
            text: payload.text ?? "",
            fromMe: payload.fromMe ?? true,
            timestamp: payload.timestamp ?? Date.now(),
            ...payload,
          };

    // 1) append to messagesCache (immutable update)
    setMessagesCache((prev) => {
      const prevForId = prev[contactId] ?? [];
      return {
        ...prev,
        [contactId]: [...prevForId, message],
      };
    });

    // 2) update contacts preview (lastMessage & lastAt)
    setContacts((prev) => {
      const updated = prev.map((c) =>
        c.id === contactId ? { ...c, lastMessage: message.text, lastAt: message.timestamp } : c
      );

      // Also update parent if setter was provided
      if (propsSetContacts) {
        propsSetContacts(updated);
      }

      // optionally move the contact to the top (uncomment if you want most-recently-active on top)
      // const moved = updated.slice().sort((a, b) => (b.lastAt || 0) - (a.lastAt || 0));
      // return moved;

      return updated;
    });

    // 3) update the selectedContactObj if it's the same contact
    setSelectedContactObj((prev) => (prev && prev.id === contactId ? { ...prev, lastMessage: message.text, lastAt: message.timestamp } : prev));
  };

  const currentMessages = messagesCache[selectedContactId] || [];

  // chatWindowRef not needed; sorting & lastAt updates enough to reorder contacts

  return (
    <div className="flex w-full h-full">
      <ChatWindow
        contacts={contacts}
        setContacts={setContacts}
        appSetContacts={propsSetContacts}
        selectedId={selectedContactId}
        onSelect={(contact) => handleSelectContact(contact)}
        formatTimestamp={formatTimestamp}
      />

      <div className="flex-1">
        {selectedContactObj ? (
          <ChatPanel
            contact={selectedContactObj}
            messages={currentMessages}
            // ChatPanel in your repo sends a message object; we accept object or string here
            onSend={(payload) => handleSend(selectedContactId, payload)}
            onCloseChat={() => {
              setSelectedContactId(null);
              setSelectedContactObj(null);
            }}
          />
        ) : (
          <Default />
        )}
      </div>
    </div>
  );
};

export default ChatPage;
