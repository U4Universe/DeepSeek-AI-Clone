import { assets } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const PromptBox = ({ isLoading, setIsLoading }) => {
  const [prompt, setPrompt] = useState("");
  const { user, chats, setChats, selectedChat, setSelectedChat } = useAppContext();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendPrompt(e);
    }
  };

  const sendPrompt = async (e) => {
    e.preventDefault();
    const promptCopy = prompt.trim();
    if (!promptCopy) return;

    try {
      if (!user) return toast.error("Please log in to send a message.");
      if (isLoading) return toast.error("Please wait for the previous response.");

      setIsLoading(true);
      setPrompt("");

      const userPrompt = {
        role: "user",
        content: promptCopy,
        timestamp: Date.now(),
      };

      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat._id === selectedChat._id
            ? { ...chat, messages: [...chat.messages, userPrompt] }
            : chat
        )
      );

      setSelectedChat((prev) => ({
        ...prev,
        messages: [...prev.messages, userPrompt],
      }));

      const { data } = await axios.post("/api/chat/ai", {
        chatId: selectedChat._id,
        prompt: promptCopy,
      });

      if (data.success) {
        const fullMessage = data.data.content;
        const messageTokens = fullMessage.split(" ");
        const assistantMessage = {
          role: "assistant",
          content: "",
          timestamp: Date.now(),
        };

        let runningContent = "";

        for (let i = 0; i < messageTokens.length; i++) {
          await new Promise((res) => setTimeout(res, 100));
          runningContent = messageTokens.slice(0, i + 1).join(" ");

          setSelectedChat((prev) => {
            const updatedMessages = [...prev.messages];
            if (updatedMessages[updatedMessages.length - 1]?.role === "assistant") {
              updatedMessages[updatedMessages.length - 1].content = runningContent;
            } else {
              updatedMessages.push({ ...assistantMessage, content: runningContent });
            }
            return { ...prev, messages: updatedMessages };
          });
        }

        setChats((prevChats) =>
          prevChats.map((chat) =>
            chat._id === selectedChat._id
              ? {
                  ...chat,
                  messages: [...chat.messages, { ...assistantMessage, content: fullMessage }],
                }
              : chat
          )
        );
      } else {
        toast.error(data.message || "Something went wrong.");
        setPrompt(promptCopy);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      setPrompt(promptCopy);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={sendPrompt}
      className={`w-full ${
        selectedChat?.messages.length > 0 ? "max-w-3xl" : "max-w-2xl"
      } bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}
    >
      <textarea
        onKeyDown={handleKeyDown}
        className="outline-none w-full resize-none overflow-hidden break-words bg-transparent text-white"
        rows={2}
        placeholder="Message DeepSeek"
        required
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      />

      <div className="flex items-center justify-between text-sm mt-2">
        <div className="flex items-center gap-2">
          <p className="flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition">
            <Image className="h-5" src={assets.deepthink_icon} alt="deepthink icon" />
            DeepThink (R1)
          </p>
          <p className="flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition">
            <Image className="h-5" src={assets.search_icon} alt="search icon" />
            Search
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Image className="w-4 cursor-pointer" src={assets.pin_icon} alt="pin icon" />
          <button
            type="submit"
            disabled={!prompt.trim() || isLoading}
            className={`${
              prompt.trim() && !isLoading ? "bg-primary" : "bg-[#71717a]"
            } rounded-full p-2 cursor-pointer`}
          >
            <Image
              className="w-3.5 aspect-square"
              src={prompt.trim() && !isLoading ? assets.arrow_icon : assets.arrow_icon_dull}
              alt="send icon"
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default PromptBox;
