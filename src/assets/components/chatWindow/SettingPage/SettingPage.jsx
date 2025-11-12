import React from "react";

const items = [
    {
        id: "account",
        title: "Account",
        subtitle: "Security notifications, account info",
        icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height='20' width='20' viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
        </svg>


        ),
    },
    {
        id: "privacy",
        title: "Privacy",
        subtitle: "Blocked contacts, disappearing messages",
        icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 2L4 5v6a8 8 0 0016 0V5l-8-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        ),
    },
    {
        id: "chats",
        title: "Chats",
        subtitle: "Theme, wallpaper, chat settings",
        icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        ),
    },
    {
        id: "notifications",
        title: "Notifications",
        subtitle: "Message notifications",
        icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        ),
    },
    {
        id: "keyboard",
        title: "Keyboard shortcuts",
        subtitle: "Quick actions",
        icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M6 10h.01M10 10h4M18 10h.01M6 14h.01M10 14h4M18 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        ),
    },
    {
        id: "help",
        title: "Help",
        subtitle: "Help center, contact us, privacy policy",
        icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.09 9a3 3 0 115.82 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 17h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        ),
    },
    ];

const SettingPage = ({ onLogout = () => {} }) => {
    return (
        <div className="text-white pt-5 px-5 pb-0 h-screen w-md shrink-0 overflow-auto flex flex-col bg-transparent">
        <div className="font-semibold text-xl h-13 w-full shrink-0">Settings</div>

        {/* Search */}
        <div className="h-13 w-full mt-2">
            <div className="searchBar flex rounded-3xl h-10 w-full items-center gap-3 pl-3 pr-3 bg-white/3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-gray-200">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>

            <input
                type="text"
                placeholder="Search settings"
                className="bg-transparent text-sm w-full font-normal border-none outline-none placeholder:text-gray-400"
                aria-label="Search settings"
            />
            </div>
        </div>

        {/* Profile top */}
        <div className="grow w-full mt-2">
            <div className="flex items-start gap-3 border-b-2 pb-4 border-[#202020]">
            <div>
                <div className="p-1 rounded-full bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80" fill="rgba(255,255,255,0.12)">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
                </svg>
                </div>
            </div>

            <div className="pt-4 gap-1 flex flex-col">
                <div className="text-base">Saum</div>
                <div className="text-sm text-[#FFFFFF99]">Battery about to die</div>
            </div>
            </div>

            {/* Settings list */}
            <nav aria-label="Settings list" className="mt-4 space-y-2">
            {items.map((it) => (
                <button
                key={it.id}
                onClick={() => console.log("clicked", it.id)}
                className="group flex items-start gap-4 w-full text-left py-3 px-3 rounded-xl hover:bg-white/3 focus:outline-none focus:ring-2 focus:ring-white/10"
                >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-white/3 flex items-center justify-center text-gray-200">
                    {it.icon}
                </div>

                <div className="flex-1">
                    <div className=" text-md leading-5">{it.title}</div>
                    <div className="text-[13px] text-gray-400 mt-0.5">{it.subtitle}</div>
                </div>
                </button>
            ))}

            {/* Divider + Logout */}
            <div className="mt-3 border-b border-white/6 pt-3">
                <button
                onClick={onLogout}
                className="group flex items-center gap-3 w-full text-left py-3 px-3 rounded-xl hover:bg-red-600/10 focus:outline-none focus:ring-2 focus:ring-red-400"
                aria-label="Log out"
                title="Log out"
                >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-red-700/10 flex items-center justify-center text-red-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M16 17l5-5-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 19H6a2 2 0 01-2-2V7a2 2 0 012-2h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div className="flex-1">
                    <div className="text-sm font-medium text-red-400">Log out</div>
                </div>
                </button>
            </div>
            </nav>
        </div>
        </div>
    );
};

export default SettingPage;
