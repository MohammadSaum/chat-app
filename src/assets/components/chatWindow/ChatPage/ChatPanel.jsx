import React, { useEffect, useRef, useState } from "react";

const ChatPanel = ({
    contact,
    messages = [],
    onSend,
    onContactInfo = () => {},
    onClearChat = () => {},
    onSelectMessage = () => {},
    onDeleteMessages = () => {},
    onCloseChat = () => {},
    formatTimestamp = null,
    }) => {
    // Local copy of messages so component can mutate (clear/delete) even if parent didn't
    const [localMessages, setLocalMessages] = useState(messages || []);
    useEffect(() => setLocalMessages(messages || []), [messages, contact?.id]);

    const [text, setText] = useState("");
    const bottomRef = useRef(null);

    // menu + modals + select mode
    const [menuOpen, setMenuOpen] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);
    const [showClearConfirm, setShowClearConfirm] = useState(false);
    const [selectMode, setSelectMode] = useState(false);
    const [selectedIds, setSelectedIds] = useState(new Set());

    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [localMessages, contact?.id]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
        if (
            menuOpen &&
            menuRef.current &&
            !menuRef.current.contains(e.target) &&
            !menuButtonRef.current?.contains(e.target)
        ) {
            setMenuOpen(false);
        }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        // create a full message object so parent can use for previews
        const newMsg = {
        id: `local-${Date.now()}`,
        text: text.trim(),
        fromMe: true,
        timestamp: Date.now(),
        };

        // immediate local feedback
        setLocalMessages((m) => [...m, newMsg]);
        setText("");
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });

        // call parent with the message object (parent can update contact preview / last message)
        try {
        // If parent expects only text, update parent code — recommended to accept message object.
        if (onSend) onSend(newMsg);
        } catch (err) {
        console.error("onSend callback error", err);
        }
    };

    const displayName = contact?.name
        ? `${contact.name.first} ${contact.name.last}`
        : contact?.username || "Unknown";

    const avatarSrc =
        contact?.picture?.thumbnail || contact?.picture?.medium || contact?.avatar || null;

    const renderAvatar = (size = 10) => {
        if (avatarSrc) {
        return (
            <img
            src={avatarSrc}
            alt={displayName}
            className={`w-${size} h-${size} rounded-full object-cover`}
            style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
            />
        );
        }
        const initials = (displayName || "U")
        .split(" ")
        .map((s) => s[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
        return (
        <div
            className="rounded-full bg-[#2b2b2b] flex items-center justify-center text-sm font-medium"
            style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
        >
            {initials}
        </div>
        );
    };

    /* -----------------------
        Menu action handlers
        ----------------------- */
    const handleContactInfo = () => {
        setMenuOpen(false);
        setShowContactModal(true);
        onContactInfo(contact);
    };

    const handleClearChatRequest = () => {
        setMenuOpen(false);
        setShowClearConfirm(true);
    };

    const confirmClearChat = () => {
        const cleared = localMessages.slice(); // copy
        setLocalMessages([]);
        setShowClearConfirm(false);
        // clear selection if any
        setSelectedIds(new Set());
        setSelectMode(false);
        try {
        onClearChat(contact, cleared);
        } catch (err) {
        // swallow errors from parent callbacks
        console.error("onClearChat callback error", err);
        }
    };

    const handleSelectMessageToggle = () => {
        setMenuOpen(false);
        const entering = !selectMode;
        setSelectMode(entering);
        if (!entering) {
        setSelectedIds(new Set());
        }
        onSelectMessage(contact, entering);
    };

    // **Updated close action** — resets local messages and tells parent to clear selection/show default view
    const handleCloseChat = () => {
        setMenuOpen(false);
        // close modals / selection
        setShowContactModal(false);
        setShowClearConfirm(false);
        setSelectMode(false);
        setSelectedIds(new Set());
        setLocalMessages([]); // reset local messages to avoid stale view

        // Inform parent to go back to default — pass null so parent can set selectedContactId=null
        try {
        onCloseChat(null);
        } catch (err) {
        console.error("onCloseChat callback error", err);
        }
    };

    /* -----------------------
        Selection mode helpers
        ----------------------- */
    const toggleSelectMessage = (id) => {
        if (!selectMode) return;
        setSelectedIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
        });
    };

    const deleteSelected = () => {
        if (selectedIds.size === 0) return;
        const idsToDelete = new Set(selectedIds);
        const remaining = localMessages.filter((m) => !idsToDelete.has(m.id));
        setLocalMessages(remaining);
        const deleted = [...idsToDelete];
        setSelectedIds(new Set());
        setSelectMode(false);
        try {
        onDeleteMessages(contact, deleted);
        } catch (err) {
        console.error("onDeleteMessages callback error", err);
        }
    };

    /* -----------------------
        Render
        ----------------------- */

    return (
        <div className="flex flex-col h-screen bg-[#161717] text-white">
        {/* Header */}
        <div className="p-4 border-b border-[#202020] flex items-center justify-between">
            <div className="flex items-center gap-3">
            {/* Profile picture */}
            <div>{renderAvatar(10)}</div>

            {/* Name & small subtitle */}
            <div className="flex flex-col">
                <div className="text-lg font-semibold leading-none">{displayName}</div>
                {contact?.status && (
                <div className="text-xs text-[#9b9b9b] -mt-0.5">{contact.status}</div>
                )}
            </div>
            </div>

            {/* Three-dot menu button */}
            <div className="relative">
            <button
                ref={menuButtonRef}
                onClick={() => setMenuOpen((s) => !s)}
                aria-haspopup="true"
                aria-expanded={menuOpen}
                className="p-2 rounded-full hover:bg-[#FFFFFF19] focus:outline-none"
                title="Options"
            >
                <div className="flex flex-col w-5 items-center gap-1 rounded-full ">
                <span className="w-1 h-1 rounded-full bg-white/90 " />
                <span className="w-1 h-1 rounded-full bg-white/90 " />
                <span className="w-1 h-1 rounded-full bg-white/90 " />
                </div>
            </button>

            {/* Dropdown menu */}
            {menuOpen && (
                <div
                ref={menuRef}
                className="absolute right-0 mt-2 w-48 bg-[#0f0f0f] border border-[#222] rounded-lg shadow-lg z-30"
                >
                <button
                    onClick={handleContactInfo}
                    className="w-full text-left px-4 py-2 hover:bg-[#1a1a1a] rounded-t-lg"
                >
                    Contact info
                </button>

                <button
                    onClick={handleClearChatRequest}
                    className="w-full text-left px-4 py-2 hover:bg-[#1a1a1a]"
                >
                    Clear chat
                </button>

                <button
                    onClick={handleSelectMessageToggle}
                    className="w-full text-left px-4 py-2 hover:bg-[#1a1a1a]"
                >
                    {selectMode ? "Exit selection" : "Select message"}
                </button>

                <button
                    onClick={handleCloseChat}
                    className="w-full text-left px-4 py-2 hover:bg-[#1a1a1a] rounded-b-lg"
                >
                    Close chat
                </button>
                </div>
            )}
            </div>
        </div>

        {/* Selection toolbar */}
        {selectMode && (
            <div className="bg-[#111] border-b border-[#202020] px-4 py-2 flex items-center justify-between">
            <div className="text-sm text-[#cfcfcf]">
                {selectedIds.size} selected
            </div>
            <div className="flex items-center gap-2">
                <button
                onClick={deleteSelected}
                disabled={selectedIds.size === 0}
                className={`px-3 py-1 rounded-full ${
                    selectedIds.size === 0 ? "bg-[#2a2a2a] cursor-not-allowed" : "bg-red-600"
                }`}
                >
                Delete
                </button>
                <button
                onClick={() => {
                    setSelectMode(false);
                    setSelectedIds(new Set());
                }}
                className="px-3 py-1 rounded-full bg-[#2b2b2b]"
                >
                Cancel
                </button>
            </div>
            </div>
        )}

        {/* Messages */}
        <div className="flex-1 hide-scrollbar overflow-y-auto p-4 space-y-3">
            {localMessages.length === 0 && (
            <div className="text-center text-[#FFFFFF1D] mt-10">
                No messages yet — say hi
            </div>
            )}

            {localMessages.map((msg) => {
            const isSelected = selectedIds.has(msg.id);
            return (
                <div
                key={msg.id}
                onClick={() => toggleSelectMessage(msg.id)}
                className={`max-w-[70%] p-3 rounded-xl text-sm flex items-center gap-3 cursor-pointer transition-all
                    ${msg.fromMe ? "ml-auto bg-[#14533B]" : "bg-[#1f1f1f]"}
                    ${selectMode ? "opacity-95" : "opacity-100"}
                `}
                style={{
                    border: isSelected ? "2px solid rgba(255,255,255,0.18)" : undefined,
                }}
                >
                {selectMode && (
                    <div className="w-4 h-4 flex items-center justify-center border rounded-sm">
                    {isSelected ? (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ) : null}
                    </div>
                )}
                                <div className="flex w-full items-end justify-between gap-2">
                                    <div className="pr-2">{msg.text}</div>
                                    <div className="text-xs text-[#FFFFFF99] ml-2">{formatTimestamp ? formatTimestamp(msg.timestamp) : (msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '')}</div>
                                </div>
                </div>
            );
            })}

            <div ref={bottomRef} />
        </div>

        {/* Input box */}
        <form
            onSubmit={handleSubmit}
            className="p-4 border-t border-[#202020] flex items-center gap-3"
        >
            <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 bg-transparent border border-[#333] px-4 py-2 rounded-full text-white outline-none"
            placeholder="Type a message"
            />
            <button
            type="submit"
            className="px-4 py-2 bg-[#147F3F] cursor-pointer rounded-full hover:scale-95"
            >
            Send
            </button>
        </form>

        {/* Contact Info Modal */}
        {showContactModal && (
            <div className="fixed inset-0 z-40 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/60"
                onClick={() => setShowContactModal(false)}
            />
            <div className="relative z-50 w-11/12 max-w-md bg-[#0f0f0f] border border-[#222] rounded-lg p-4">
                <div className="flex items-center gap-4">
                <div>{renderAvatar(12)}</div>
                <div>
                    <div className="text-lg font-semibold">{displayName}</div>
                    <div className="text-sm text-[#9b9b9b]">{contact?.username}</div>
                </div>
                </div>

                <div className="mt-4 text-sm space-y-2">
                {contact?.status && <div>Status: {contact.status}</div>}
                {contact?.email && <div>Email: {contact.email}</div>}
                {contact?.phone && <div>Phone: {contact.phone}</div>}
                {contact?.about && <div>About: {contact.about}</div>}
                </div>

                <div className="mt-4 flex justify-end gap-2">
                <button
                    onClick={() => setShowContactModal(false)}
                    className="px-3 py-1 rounded-md bg-[#2b2b2b] cursor-pointer hover:scale-95"
                >
                    Close
                </button>
                </div>
            </div>
            </div>
        )}

        {/* Clear Chat Confirmation */}
        {showClearConfirm && (
            <div className="fixed inset-0 z-40 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/60"
                onClick={() => setShowClearConfirm(false)}
            />
            <div className="relative z-50 w-11/12 max-w-sm bg-[#0f0f0f] border border-[#222] rounded-lg p-4">
                <div className="text-lg font-semibold">Clear chat?</div>
                <div className="mt-2 text-sm text-[#cfcfcf]">
                This will remove all messages from this conversation. This action cannot be undone.
                </div>
                <div className="mt-4 flex justify-end gap-2">
                <button
                    onClick={() => setShowClearConfirm(false)}
                    className="px-3 py-1 rounded-md bg-[#2b2b2b]"
                >
                    Cancel
                </button>
                <button
                    onClick={confirmClearChat}
                    className="px-3 py-1 rounded-md bg-red-600 hover:bg-red-800"
                >
                    Clear
                </button>
                </div>
            </div>
            </div>
        )}
        </div>
    );
};

export default ChatPanel;
