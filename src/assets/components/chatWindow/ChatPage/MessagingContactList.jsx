import React, { useEffect, useState } from "react";
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
const MessagingContactCard = ({ user, onClick, isActive, formatTimestamp }) => {
  return (
    <div
      role="button"
      onClick={() => onClick?.(user)}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") onClick?.(user) }}
      className={`messagingContact rounded-xl flex h-16 pl-1 p-3 items-center cursor-pointer mb-2 w-full shrink-0 duration-200
                ${isActive ? "bg-[#FFFFFF1D]" : "hover:bg-[#FFFFFF1D]"}`}
    >
      <div className="w-15 h-13 flex rounded-full items-center mr-3 justify-center">
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
const MessagingContactList = ({ contacts: externalContacts, selectedId, onSelect, formatTimestamp }) => {
  const [contacts, setContacts] = useState(externalContacts ?? []);
  const [loading, setLoading] = useState(!Array.isArray(externalContacts) || externalContacts.length === 0);
  const [error, setError] = useState(null);

  const fmt = formatTimestamp ?? defaultFormatTimestamp;

  // If parent supplies contacts prop, keep local `contacts` synced to it.
  useEffect(() => {
    if (Array.isArray(externalContacts) && externalContacts.length > 0) {
      setContacts(externalContacts);
      setLoading(false);
      setError(null);
    }
  }, [externalContacts]);

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

  if (loading) return <div className="p-2 text-[#FFFFFF1A]">Loading…</div>;
  if (error) return <div className="p-2 text-red-400">Failed to load</div>;

  /* When parent wants to update a contact's lastMessage/lastAt, the parent should update the contacts prop.
     If you need local update helper for testing/demo, uncomment and use updateContactPreview below. */

  // const updateContactPreview = (id, { lastMessage, lastAt }) => {
  //   setContacts(prev => prev.map(c => c.id === id ? { ...c, lastMessage, lastAt } : c));
  // };

  return (
    <div className="p-1">
      {contacts.map((user) => (
        <MessagingContactCard
          key={user.id}
          user={user}
          isActive={selectedId === user.id}
          onClick={onSelect}
          formatTimestamp={fmt}
        />
      ))}
    </div>
  );
};

export default MessagingContactList;
