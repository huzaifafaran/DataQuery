import React, { useState } from 'react'
import { 
  BarChart3, 
  Database, 
  MessageSquare, 
  Settings, 
  HelpCircle, 
  BookOpen,
  Menu,
  X
} from 'lucide-react'

const Navigation = ({ activeTab, onTabChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    {
      id: 'chat',
      label: 'Chat',
      icon: MessageSquare,
      description: 'Talk to your data'
    },
    {
      id: 'features',
      label: 'Features',
      icon: BarChart3,
      description: 'Explore capabilities'
    },
    {
      id: 'about',
      label: 'About',
      icon: BookOpen,
      description: 'Learn more'
    },
    {
      id: 'support',
      label: 'Support',
      icon: HelpCircle,
      description: 'Get help'
    }
  ]

  const handleTabClick = (tabId) => {
    onTabChange(tabId)
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabClick(item.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
              activeTab === item.id
                ? 'text-primary-600 bg-primary-50'
                : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full flex items-center space-x-3 p-3 text-left rounded-lg transition-all duration-200 ${
                  activeTab === item.id
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation
