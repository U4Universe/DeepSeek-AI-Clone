import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Promptbox = ({ setIsLoading, isLoading }) => {
    const [prompt, setPrompt] = useState('')

    return (
        <form
            className={`w-full ${false ? 'max-w-3xl' : 'max-w-2xl'} bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}
        >
            <textarea
                className="outline-none w-full resize-none overflow-hidden break-words bg-transparent text-white"
                rows={2}
                placeholder="Chat with DeepSeek"
                required
                onChange={(e) => setPrompt(e.target.value)}
                value={prompt}
            />

            <div className="flex justify-between items-center mt-4">
                {/* Left: Chips */}
                <div className="flex gap-2">
                    <p className="flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition text-white">
                        <Image className="h-5" src={assets.deepthink_icon} alt="" />
                        DeepThink (R1)
                    </p>
                    <p className="flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition text-white">
                        <Image className="h-5" src={assets.search_icon} alt="" />
                        Search
                    </p>
                </div>

                {/* Right: Pin + Send */}
                <div className="flex items-center gap-2">
                    {/* PIN ICON - now with simple background (no gradient) */}
                    <div
                        className={`p-2 rounded-full transition-all ${
                            prompt ? 'bg-none' : 'bg-transparent'
                        }`}
                    >
                        <Image className="w-4" src={assets.pin_icon} alt="Pin" />
                    </div>

                    {/* Send Button */}
                    <button
                        type="submit"
                        className={`rounded-full p-2 cursor-pointer transition-all ${
                            prompt ? 'bg-gradient-to-r from-[#5F5FFF] to-[#9F59FF]' : 'bg-[#71717a]'
                        }`}
                    >
                        const handleSend = async () => {
                        const res = await fetch("/api/chat/ai", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ prompt: input }),
                    });

                        const data = await res.json();
                        setMessages([...messages, { role: "user", content: input }, { role: "assistant", content: data.response }]);
                    };

                        <Image
                            className="w-4 aspect-square"
                            src={assets.arrow_icon}
                            alt="Send"
                        />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Promptbox
