import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useClerk, UserButton } from '@clerk/nextjs'
import { useAppContext } from '@/context/AppContent'
import ChatLabel from './ChatLabel'

const Sidebar = ({ expand, setExpand }) => {

    const {openSignIn} = useClerk()
    const {user} = useAppContext()

    return (
        <div
            className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all z-50 max-md:absolute max-md:h-screen ${
                expand ? 'p-4 w-64' : 'md:w-20 w-0'
            }`}
        >
            <div>
                {/* Logo and Toggle */}
                <div className={`flex ${expand ? 'flex-row gap-10' : 'flex-col items-center gap-8'}`}>
                    <Image
                        className={expand ? 'w-36' : 'w-10'}
                        src={expand ? assets.logo_text : assets.logo_icon}
                        alt=""
                    />

                    {/* Sidebar Toggle */}
                    <div
                        onClick={() => setExpand(!expand)}
                        className="group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 h-9 w-9 aspect-square rounded-lg cursor-pointer"
                    >
                        <Image src={assets.menu_icon} alt="" className="md:hidden" />
                        <Image
                            src={expand ? assets.sidebar_close_icon : assets.sidebar_icon}
                            alt=""
                            className="hidden md:block w-7"
                        />

                        {/* Tooltip */}
                        <div
                            className={`absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition z-50 ${
                                expand ? 'top-full mt-2' : 'bottom-full mb-2'
                            }`}
                        >
                            <div className="bg-black text-white text-sm px-3 py-2 rounded-md shadow-lg pointer-events-none text-center">
                                {expand ? 'Close sidebar' : 'Open sidebar'}
                            </div>
                            <div
                                className={`w-2.5 h-2.5 bg-black rotate-45 absolute left-1/2 -translate-x-1/2 ${
                                    expand ? '-top-1.5' : 'top-full mt-[-2px]'
                                }`}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* New Chat Button */}
                <div className="mt-6">
                    <button
                        className={`group relative flex items-center transition-all duration-300 ${
                            expand
                                ? 'bg-gradient-to-r from-[#5F5FFF] to-[#9F59FF] hover:opacity-90 rounded-2xl gap-3 px-4 py-2'
                                : 'h-10 w-10 mx-auto hover:bg-gray-500/30 rounded-xl justify-center'
                        }`}
                    >
                        <Image
                            src={expand ? assets.chat_icon : assets.chat_icon_dull}
                            alt="new chat"
                            className="w-6"
                        />
                        {expand && <p className="text-white text-sm font-medium">New Chat</p>}

                        {/* Tooltip when collapsed */}
                        {!expand && (
                            <div className="absolute w-max bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-3 py-1.5 rounded-md shadow-lg pointer-events-none">
                                New Chat
                                <div className="w-2.5 h-2.5 bg-black rotate-45 absolute left-1/2 -translate-x-1/2 top-full -mt-1"></div>
                            </div>
                        )}
                    </button>

                    {/* Recents Label */}
                    {expand && (
                        <div className="mt-8 text-white/25 text-sm">
                            <p className="my-1">Recents</p>
                            <ChatLabel/>
                        </div>
                    )}
                </div>
            </div>

            {/* Get App Section */}
            <div className="mt-8">
                <div
                    className={`group relative flex items-center cursor-pointer ${
                        expand
                            ? 'gap-2 text-white/80 text-sm p-2.5 border border-white/20 rounded-lg hover:bg-white/10'
                            : 'h-10 w-10 mx-auto hover:bg-gray-500/30 rounded-lg justify-center'
                    }`}
                >
                    <Image
                        className={expand ? 'w-5' : 'w-6.5 mx-auto'}
                        src={expand ? assets.phone_icon : assets.phone_icon_dull}
                        alt=""
                    />

                    {expand && <span>Get App</span>}
                    {expand && <Image alt="" src={assets.new_icon} className="w-4" />}

                    {/* Tooltip QR Code on right side and slightly above */}
                    <div
                        className="absolute left-full top-[-60px] ml-4 opacity-0 group-hover:opacity-100 transition z-50"
                    >
                        <div className="relative w-max bg-black text-white text-sm p-3 rounded-lg shadow-lg">
                            <Image className="w-38 mb-0.5" src={assets.qrcode} alt="QR Code" />
                            <p className="text-center text-xs">Scan to get DeepSeek App</p>
                            <div className="w-3 h-3 bg-black rotate-45 absolute -left-2 top-1/2 -translate-y-1/2"></div>
                        </div>
                    </div>
                </div>

                {/* My Profile Section */}
                <div onClick={user ? null : openSignIn}
                    className={`flex items-center mt-4 cursor-pointer text-white/80 text-sm p-2.5 ${
                        expand ? 'hover:bg-white/10 rounded-lg gap-1' : 'justify-center w-full'
                    }`}
                >
                    {
                        user ? <UserButton/> : <Image src={assets.profile_icon} alt="" className="w-7" />
                    }
                    {expand && <span>My Profile</span>}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
