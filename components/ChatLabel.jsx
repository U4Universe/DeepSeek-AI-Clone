import React, { useState, useRef, useEffect } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const ChatLabel = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null)

    // Close dropdown if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="group flex items-center justify-between p-2 text-white/80 hover:bg-white/10 rounded-lg text-sm cursor-pointer">
            <p className="truncate max-w-[85%]">Chat Name Here</p>

            {/* Three dots and menu */}
            <div className="relative" ref={menuRef}>
                <div
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="hidden group-hover:flex items-center justify-center h-6 w-6 aspect-square hover:bg-black/80 rounded-lg cursor-pointer"
                >
                    <Image src={assets.three_dots} alt="" className="w-4" />
                </div>

                {menuOpen && (
                    <div className="absolute -right-36 top-6 bg-gray-700 rounded-xl w-max p-2 z-10">
                        <div className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg cursor-pointer">
                            <Image src={assets.pencil_icon} alt="" className="w-4" />
                            <p>Rename</p>
                        </div>
                        <div className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg cursor-pointer">
                            <Image src={assets.delete_icon} alt="" className="w-4" />
                            <p>Delete</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ChatLabel
