import React, { useEffect, useRef, useState } from "react";

const ChatPanel = ({ contact, messages, onSend }) => {
  const [text, setText] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, contact?.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  };

  const displayName = contact?.name
    ? `${contact.name.first} ${contact.name.last}`
    : contact?.username || "Unknown";

  return (
    <div className="flex flex-col h-screen bg-[#161717] text-white">
      {/* Header */}
      <div className="p-4 border-b border-[#202020]">
        <div className="text-lg font-semibold">{displayName}</div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 mt-10">
            No messages yet — say hi 👋
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[70%] p-3 rounded-xl text-sm ${
              msg.fromMe
                ? "ml-auto bg-[#21C063]"
                : "bg-[#1f1f1f]"
            }`}
          >
            {msg.text}
          </div>
        ))}

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
          className="px-4 py-2 bg-[#21C063] cursor-pointer rounded-full hover:scale-95"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatPanel;
