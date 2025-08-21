import React, { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Loader2, Sparkles, BarChart3, Database } from 'lucide-react'
import axios from 'axios'

const ChatInterface = ({ webhookUrl, onConnectionChange }) => {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const [connectionStatus, setConnectionStatus] = useState('disconnected')

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Test connection on component mount
    testConnection()
  }, [])

  const testConnection = async () => {
    try {
      setConnectionStatus('connecting')
      const response = await axios.post(webhookUrl, {
        chatInput: 'Hello',
        sessionId: 'default-session',
        type: 'connection_test'
      }, {
        timeout: 5000
      })
      
      if (response.status === 200) {
        setConnectionStatus('connected')
        onConnectionChange(true)
        
        // Add welcome message
        setMessages([
          {
            id: 1,
            type: 'bot',
            content: 'Hello! I\'m DataQuery, your AI data analysis assistant. I can analyze your Google Sheets data and answer questions about it. I can also send formatted HTML emails with your data insights. What would you like to know about your data?',
            timestamp: new Date()
          }
        ])
      }
    } catch (error) {
      console.error('Connection test failed:', error)
      setConnectionStatus('error')
      onConnectionChange(false)
      
      setMessages([
        {
          id: 1,
          type: 'bot',
          content: 'I\'m having trouble connecting to the data analysis service. Please check your connection and try again.',
          timestamp: new Date()
        }
      ])
    }
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)
    setIsTyping(true)

    try {
      const response = await axios.post(webhookUrl, {
        chatInput: inputMessage,
        sessionId: 'default-session',
        conversation_history: messages.map(msg => ({
          role: msg.type === 'user' ? 'user' : 'assistant',
          content: msg.content
        }))
      })

      if (response.data && (response.data.response || response.data.output)) {
        const botMessage = {
          id: Date.now() + 1,
          type: 'bot',
          content: response.data.response || response.data.output,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, botMessage])
      } else {
        throw new Error('Invalid response format')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: 'Sorry, I encountered an error while processing your request. Please try again.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickActions = [
    {
      title: "Campaign Analysis",
      actions: [
        "What is the total spend across all campaigns?",
        "How much did we spend on Paid Search only?",
        "What are the month-over-month changes in ad spend?"
      ]
    },
    {
      title: "Performance Metrics",
      actions: [
        "Which campaigns are top-performing by conversion rate?",
        "What is the cost per lead for each channel?"
      ]
    }
  ]

  return (
    <div className="glass-effect rounded-3xl p-6 shadow-2xl">
      {/* Chat Header */}
      <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-200">
        <div className="p-2 bg-gradient-to-r from-primary-500 to-data-500 rounded-full">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 font-poppins">Data Analysis Chat</h3>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${
              connectionStatus === 'connected' ? 'bg-green-500' : 
              connectionStatus === 'connecting' ? 'bg-yellow-500' : 'bg-red-500'
            }`} />
            <span className="text-sm text-gray-600 font-inter">
              {connectionStatus === 'connected' ? 'Connected to Data Service' :
               connectionStatus === 'connecting' ? 'Connecting...' : 'Connection Error'}
            </span>
          </div>
        </div>
      </div>

                      {/* Quick Actions */}
                {messages.filter(msg => msg.type === 'user').length === 0 && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-4 font-inter">Quick actions to get started:</p>
                    <div className="space-y-4">
                      {quickActions.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2 font-poppins">{section.title}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {section.actions.map((action, actionIndex) => (
                              <button
                                key={actionIndex}
                                onClick={() => setInputMessage(action)}
                                className="text-left p-3 bg-white/50 hover:bg-white/80 rounded-lg border border-gray-200 hover:border-primary-300 transition-all text-sm text-gray-700 hover:text-primary-700 font-inter"
                              >
                                {action}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

      {/* Messages */}
      <div className="h-96 overflow-y-auto mb-6 scrollbar-hide">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex mb-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`p-2 rounded-full ${
                message.type === 'user' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {message.type === 'user' ? (
                  <User className="w-4 h-4" />
                ) : (
                  <Bot className="w-4 h-4" />
                )}
              </div>
              <div className={`chat-bubble ${
                message.type === 'user' ? 'user-bubble' : 'bot-bubble'
              }`}>
                <p className="text-sm leading-relaxed font-inter">{message.content}</p>
                <span className="text-xs opacity-70 mt-1 block font-inter">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-gray-100 rounded-full">
                <Bot className="w-4 h-4 text-gray-600" />
              </div>
              <div className="chat-bubble bot-bubble">
                <div className="typing-indicator">
                  <div className="typing-dot" style={{ animationDelay: '0ms' }}></div>
                  <div className="typing-dot" style={{ animationDelay: '150ms' }}></div>
                  <div className="typing-dot" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex space-x-3">
        <div className="flex-1 relative">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about your data..."
            className="w-full p-4 pr-12 border border-gray-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            rows="1"
            disabled={isLoading || connectionStatus !== 'connected'}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {isLoading ? (
              <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />
            ) : (
              <Sparkles className="w-5 h-5 text-gray-400" />
            )}
          </div>
        </div>
        
        <button
          onClick={handleSendMessage}
          disabled={!inputMessage.trim() || isLoading || connectionStatus !== 'connected'}
          className="p-4 bg-gradient-to-r from-primary-500 to-data-500 text-white rounded-2xl hover:from-primary-600 hover:to-data-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>

      {/* Connection Status */}
      {connectionStatus === 'error' && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <Database className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-700 font-inter">
              Connection failed. Please check your webhook URL and try again.
            </span>
          </div>
          <button
            onClick={testConnection}
            className="mt-2 text-sm text-red-600 hover:text-red-800 underline font-inter"
          >
            Retry Connection
          </button>
        </div>
      )}
    </div>
  )
}

export default ChatInterface
