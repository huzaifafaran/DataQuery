import React from 'react'
import { Database, Wifi, WifiOff } from 'lucide-react'

const Header = ({ isConnected }) => {
  return (
    <header className="glass-effect sticky top-0 z-20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-primary-500 to-data-500 rounded-lg">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">DataQuery</h2>
              <p className="text-sm text-gray-600">AI Data Analysis</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {isConnected ? (
                <>
                  <Wifi className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">Connected</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-4 h-4 text-red-500" />
                  <span className="text-sm text-red-600 font-medium">Disconnected</span>
                </>
              )}
            </div>
            
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <a href="#features" className="hover:text-primary-600 transition-colors">Features</a>
              <a href="#about" className="hover:text-primary-600 transition-colors">About</a>
              <a href="#support" className="hover:text-primary-600 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
