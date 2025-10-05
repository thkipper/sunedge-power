import { useState } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

/**
 * AI Chat Widget for SunEdge Power
 *
 * Features:
 * - Real-time message updates via Convex
 * - Session-based conversation history
 * - Auto-scroll to latest messages
 * - Clean, modern UI with Tailwind
 */

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [sessionId] = useState(() => {
    // Generate or retrieve session ID from localStorage
    let id = localStorage.getItem('chatSessionId');
    if (!id) {
      id = `session-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      localStorage.setItem('chatSessionId', id);
    }
    return id;
  });

  // Real-time message subscription
  const messages = useQuery(api.messages.list, { sessionId }) || [];

  // Mutations for sending and clearing messages
  const sendMessage = useMutation(api.messages.send);
  const clearMessages = useMutation(api.messages.clear);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    try {
      await sendMessage({ sessionId, text: inputText });
      setInputText('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const handleClear = async () => {
    if (confirm('Clear all chat history?')) {
      try {
        await clearMessages({ sessionId });
      } catch (error) {
        console.error('Failed to clear messages:', error);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center gap-2"
        >
          <span className="text-2xl">💬</span>
          <span className="font-semibold">Chat with Sunny</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-lg shadow-2xl flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">Sunny ☀️</h3>
          <p className="text-sm text-blue-100">Your Solar Assistant</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleClear}
            className="text-white hover:text-blue-100 transition"
            title="Clear chat"
          >
            🗑️
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-blue-100 transition text-xl"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <p className="text-4xl mb-2">👋</p>
            <p className="font-semibold">Welcome to SunEdge Power!</p>
            <p className="text-sm mt-2">
              Ask me anything about solar panels, savings, or getting started.
            </p>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.isViewer ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  msg.isViewer
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.isViewer ? 'text-blue-100' : 'text-gray-500'
                  }`}
                >
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about solar power..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={2}
          />
          <button
            onClick={handleSend}
            disabled={!inputText.trim()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
