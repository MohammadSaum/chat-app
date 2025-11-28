import React, { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import axios from "axios";

/* Timestamp formatter (local fallback if parent doesn't provide one) */
const defaultFormatTimestamp = (ts) => {
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

/* Contact card */
const MessagingContactCard = ({ user, onClick, isActive, formatTimestamp, isSelectMode, isSelected, onSelectChange }) => {
  return (
    <div
      role="button"
      onClick={() => {
        if (isSelectMode) {
          onSelectChange?.(user.id)
        } else {
          onClick?.(user)
        }
      }}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") onClick?.(user) }}
      className={`messagingContact rounded-xl flex h-16 pl-1 p-3 items-center cursor-pointer mb-2 w-full shrink-0 duration-200 relative
                ${isActive ? "bg-[#FFFFFF1D]" : "hover:bg-[#FFFFFF1D]"}`}
    >
      {isSelectMode && (
        <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
          <div className={`w-5 h-5 rounded-full border-2 border-[#FFFFFF1A] flex items-center justify-center ${isSelected ? 'bg-gray-800' : ''}`}>
            {isSelected && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="white"><path fill="none" d="M0 0h24v24H0z"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>
            )}
          </div>
        </div>
      )}

      <div className={`w-15 h-13 flex rounded-full items-center ${isSelectMode ? 'ml-8' : 'mr-3'} justify-center`}>
        <img
          src={user.picture?.large ?? "/placeholder-avatar.png"}
          alt={`${user.name?.first ?? ""} ${user.name?.last ?? ""}`}
          className="rounded-full w-12 h-12 object-cover"
          onError={(e) => { e.currentTarget.src = "/placeholder-avatar.png" }}
        />
      </div>

      <div className="flex flex-col w-full min-w-0 justify-center">
        <div className="flex h-7 w-full items-center justify-between">
          <div className="truncate font-medium">
            {user.name?.first ?? "Unknown"}
            {user.name?.last ? ` ${user.name.last}` : ""}
          </div>

          <div className="shrink-0 text-xs text-gray-400">
            {user.lastAt ? formatTimestamp(user.lastAt) : ""}
          </div>
        </div>

        <div className="text-sm text-gray-300 truncate">
          {user.lastMessage ?? "Tap to start a chat"}
        </div>
      </div>
    </div>
  );
};

/* Main list component */
const MessagingContactListComponent = ({ contacts: externalContacts, selectedId, onSelect, formatTimestamp, onSelectModeChange, setContacts: parentSetContacts, appSetContacts }, ref) => {
  const [contacts, setContacts] = useState(externalContacts ?? []);
  const [loading, setLoading] = useState(!Array.isArray(externalContacts) || externalContacts.length === 0);
  const [error, setError] = useState(null);
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState(new Set());
  const [pinnedContacts, setPinnedContacts] = useState(new Set());
  const [showSelectDropdown, setShowSelectDropdown] = useState(false);
  const selectDropdownRef = React.useRef(null);

  const fmt = formatTimestamp ?? defaultFormatTimestamp;

  // control helpers
  const enableSelectMode = () => setIsSelectMode(true)
  const disableSelectMode = () => handleExitSelectMode()
  const pinSelected = () => handlePin()
  const deleteSelected = () => handleDelete()
  const touchContact = (contactId) => {
    setContacts(prev => {
      const idx = prev.findIndex(c => c.id === contactId)
      if (idx === -1) return prev

      const contact = prev[idx]
      const isPinned = contact.pinned === true

      // remove contact from list
      const newList = prev.slice(0, idx).concat(prev.slice(idx + 1))

      let updated
      if (isPinned) {
        // move to front of pinned area
        const pinned = newList.filter(c => c.pinned)
        const rest = newList.filter(c => !c.pinned)
        updated = [contact, ...pinned, ...rest]
      } else {
        // not pinned: insert after pinned area
        const pinned = newList.filter(c => c.pinned)
        const unpinned = newList.filter(c => !c.pinned)
        updated = [...pinned, contact, ...unpinned]
      }
      if (parentSetContacts) parentSetContacts(updated)
      if (appSetContacts) appSetContacts(updated)
      return updated
    })
  }

  // Expose functions to parent
  useImperativeHandle(ref, () => ({
    enableSelectMode,
    disableSelectMode,
    pinSelected,
    deleteSelected,
    touchContact,
    getSelectedCount: () => selectedContacts.size
  }), [selectedContacts.size]);

  // If parent supplies contacts prop, keep local `contacts` synced to it.
  useEffect(() => {
    if (Array.isArray(externalContacts) && externalContacts.length > 0) {
      setContacts(externalContacts);
      setLoading(false);
      setError(null);
    }
  }, [externalContacts]);

  // keep local pinned set in sync with contacts' pinned property
  useEffect(() => {
    setPinnedContacts(new Set(contacts.filter(c => c.pinned).map(c => c.id)))
  }, [contacts]);

  // If no external contacts provided, fetch from API once.
  useEffect(() => {
    if (Array.isArray(externalContacts) && externalContacts.length > 0) return;

    let cancelled = false;
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://randomuser.me/api/?results=15");
        if (cancelled) return;
        const mapped = res.data.results.map((u) => ({
          id: u.login?.uuid,
          name: u.name,
          picture: u.picture,
          email: u.email,
          lastMessage: "Tap to start a chat",
          lastAt: null,
          raw: u,
        }));
        setContacts(mapped);
      } catch (err) {
        if (!cancelled) setError(err);
        console.error("error occurred:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchUsers();
    return () => { cancelled = true };
  }, [externalContacts]);

  const handleSelectToggle = (contactId) => {
    setSelectedContacts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(contactId)) {
        newSet.delete(contactId);
      } else {
        newSet.add(contactId);
      }
      return newSet;
    });
  };

  const handleDelete = () => {
    setContacts(prev => {
      const filtered = prev.filter(c => !selectedContacts.has(c.id));
      if (parentSetContacts) parentSetContacts(filtered)
      if (appSetContacts) appSetContacts(filtered)
      return filtered
    });
    setSelectedContacts(new Set());
  };

  const handlePin = () => {
    setPinnedContacts(prev => {
      const newSet = new Set(prev);
      selectedContacts.forEach(id => {
        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          newSet.add(id);
        }
      });
      return newSet;
    });
    // Also mark pinned in contact objects and update parent if setter available
    setContacts(prev => {
      const updated = prev.map(c => {
        if (!selectedContacts.has(c.id)) return c
        const newPinned = !(c.pinned === true)
        return { ...c, pinned: newPinned, lastAt: newPinned ? Date.now() : c.lastAt }
      })
      if (parentSetContacts) parentSetContacts(updated)
      if (appSetContacts) appSetContacts(updated)
      return updated
    })
    setSelectedContacts(new Set());
  };

  const handleExitSelectMode = () => {
    setIsSelectMode(false);
    setSelectedContacts(new Set());
    setShowSelectDropdown(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const onDocClick = (e) => {
      if (!showSelectDropdown) return;
      if (selectDropdownRef.current?.contains(e.target)) return;
      setShowSelectDropdown(false);
    };

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowSelectDropdown(false);
      }
    };

    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [showSelectDropdown]);

  // notify parent when select mode changes or selected count changes
  useEffect(() => {
    if (typeof onSelectModeChange === 'function') {
      onSelectModeChange({ isSelectMode, selectedCount: selectedContacts.size });
    }
  }, [isSelectMode, selectedContacts.size, onSelectModeChange]);

  // Sort contacts: pinned first, then rest; among each group order by lastAt descending
  const sortedContacts = [...contacts].sort((a, b) => {
    const aPinned = a.pinned ? 1 : 0;
    const bPinned = b.pinned ? 1 : 0;
    if (aPinned !== bPinned) return bPinned - aPinned; // pinned first

    // If both pinned, and one is selected, keep selected at highest priority
    if (a.pinned && b.pinned) {
      if (selectedId === a.id && selectedId !== b.id) return -1;
      if (selectedId === b.id && selectedId !== a.id) return 1;
    }

    const aAt = a.lastAt || 0;
    const bAt = b.lastAt || 0;
    return bAt - aAt;
  });

  if (loading) return <div className="p-2 text-[#FFFFFF1A]">Loading…</div>;
  if (error) return <div className="p-2 text-red-400">Failed to load</div>;

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-1 overflow-y-auto minScrollBar">
        {sortedContacts.map((user) => (
          <MessagingContactCard
            key={user.id}
            user={user}
            isActive={selectedId === user.id && !isSelectMode}
            onClick={onSelect}
            formatTimestamp={fmt}
            isSelectMode={isSelectMode}
            isSelected={selectedContacts.has(user.id)}
            onSelectChange={handleSelectToggle}
          />
        ))}
      </div>

    </div>
  );
};

const MessagingContactList = forwardRef(MessagingContactListComponent);

export default MessagingContactList;
