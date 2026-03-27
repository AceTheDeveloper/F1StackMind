import { useRef, useState, useEffect } from "react"
import chatApi from "../utilities/chatApi";


export function ChatWidget() {

    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "bot", text: "Hey there 👋 I'm Ronin, F1StackMind assistant. Ask me anything about our org, events, or tech community!"},
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const textareaRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    async function sendMessage(message) {
        if (isTyping) return;
        if (!message.trim()) return;

        setMessages((prev) => [...prev, { role: "user", text: message }]);
        if (textareaRef.current) textareaRef.current.style.height = "auto";
        setInput("");
        setIsTyping(true);

        try {
            const response = await chatApi.post("/messages", {
            question: message,
            });
            setIsTyping(false);
            setMessages((prev) => [...prev, { role: "bot", text: response.data }]);
        } catch (error) {
            setIsTyping(false);

            if (error.response?.status === 429) {
                setMessages((prev) => [...prev, {
                    role: "bot",
                    text: "You're sending messages too fast. Please slow down",
                }]);
                return;
            }

            setMessages((prev) => [...prev, {
                role: "bot",
                text: "Sorry, I'm having trouble connecting. Please try again!",
            }]);
        }
    }

    function handleKey(e) {
        if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage(input);
        }
    }

    function autoResize(e) {
        e.target.style.height = "auto";
        e.target.style.height = Math.min(e.target.scrollHeight, 80) + "px";
    }



    return (

        <>
            <button onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-15 sm:h-15 bg-white rounded-full border-none cursor-pointer flex items-center justify-center animate-pulse-ring hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-transform duration-200"    
            >
                {isOpen ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    ) : (
                    <>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        {/* Notification dot */}
                        <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#111]" />
                    </>
                    )}
            </button>

            <div
                className={`fixed bottom-20 right-4 sm:bottom-17 sm:right-8 w-[90vw] max-w-85 sm:w-85 h-[70vh] max-h-150 sm:h-110 bg-[#0d0d0d] border border-[#2a2a2a] rounded sm:rounded flex flex-col z-40 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8)] font-mono-custom transition-all duration-300 origin-bottom-right
                ${isOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-90 translate-y-4 pointer-events-none"}`}
            >
                
                    <div className="bg-white px-4.5 py-3.5 flex items-center justify-between shrink-0">
                        <div>
                            <div className="font-bebas text-lg font-bold text-black tracking-wide leading-none">
                            Ronin
                            </div>
                            <div className="font-mono-custom text-xs text-[#555] tracking-[2px] uppercase mt-0.5">
                            AI Assistant
                            </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#333] tracking-widest uppercase">
                            <span className="w-1.75 h-1.75 bg-green-500 rounded-full animate-pulse" />
                            Online
                        </div>
                    </div>

                <div className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-3.5">
                    {messages.map((msg, i) => (
                        <div
                        key={i}
                        className={`flex gap-2 items-start ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                        >
                        {/* Avatar */}
                        <div
                            className={`w-7 h-7 rounded-sm shrink-0 flex items-center justify-center text-xs leading-none mt-0.5
                            ${msg.role === "bot"
                                ? "bg-white text-black font-bebas text-[13px]"
                                : "bg-[#1e1e1e] text-white border border-[#333] font-mono-custom text-[9px]"
                            }`}
                        >
                            {msg.role === "bot" ? "F1" : "YOU"}
                        </div>

                        <div className={msg.role === "user" ? "items-end flex flex-col" : ""}>
                            <div
                            className={`max-w-65 px-3.5 py-2.5 text-[12px] leading-relaxed
                                ${msg.role === "bot"
                                ? "bg-[#1a1a1a] text-[#e0e0e0] border border-[#2a2a2a] rounded-[2px_8px_8px_8px]"
                                : "bg-white text-black font-bold border border-white rounded-[8px_2px_8px_8px]"
                                }`}
                            dangerouslySetInnerHTML={{ __html: msg.text }}
                            />
                            <div className={`text-[9px] text-[#444] mt-1 tracking-[0.5px] ${msg.role === "user" ? "text-right" : ""}`}>
                            {msg.time}
                            </div>
                        </div>
                        </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                        <div className="flex gap-2 items-start">
                        <div className="w-7 h-7 rounded-sm bg-white flex items-center justify-center font-bebas text-[13px] text-black shrink-0">
                            F1
                        </div>
                        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[2px_8px_8px_8px] px-3.5 py-3 flex gap-1 items-center">
                            <span className="typing-dot w-1.5 h-1.5 bg-[#555] rounded-full inline-block" />
                            <span className="typing-dot w-1.5 h-1.5 bg-[#555] rounded-full inline-block" />
                            <span className="typing-dot w-1.5 h-1.5 bg-[#555] rounded-full inline-block" />
                        </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>


                <div className="px-4 py-3 border-t border-[#1e1e1e] flex gap-2.5 items-end shrink-0">
                    <div className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm px-3 py-2 focus-within:border-[#555] transition-colors duration-200">
                        <textarea
                        value={input}
                        rows={1}
                        placeholder="Ask anything..."
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKey}
                        onInput={autoResize}
                        className="w-full bg-transparent border-none outline-none text-[#e0e0e0] font-mono-custom text-[14px] sm:text-[12px] resize-none max-h-20 leading-relaxed placeholder-[#3a3a3a]"                        />
                    </div>
                    <button
                        onClick={() => sendMessage(input)}
                        className="w-9.5 h-9.5 bg-white border-none rounded-sm cursor-pointer flex items-center justify-center shrink-0 hover:bg-[#ddd] active:scale-95 transition-all duration-150"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                    </button>
                </div>
            </div>
        </>

    )

}