import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import ChatInterface from './components/ChatInterface'
import Header from './components/Header'
import FloatingData from './components/FloatingData'
import Features from './components/Features'
import About from './components/About'
import Support from './components/Support'
import Footer from './components/Footer'

function App() {
  const [isConnected, setIsConnected] = useState(false)
  const [activeTab, setActiveTab] = useState('chat')

  const renderContent = () => {
    switch (activeTab) {
      case 'chat':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 font-poppins">
                DataQuery
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter mb-4">
                Ask questions about your Google Sheets data and get instant insights.
              </p>
              <p className="text-sm text-gray-500 font-inter">
                Built by Nyrix
              </p>
            </div>
            <ChatInterface
              webhookUrl="https://nyrix.app.n8n.cloud/webhook/edca0f0a-77c3-43e5-8ece-e514a29446f5/chat"
              onConnectionChange={setIsConnected}
            />
          </div>
        )
      case 'features':
        return <Features onTabChange={setActiveTab} />
      case 'about':
        return <About onTabChange={setActiveTab} />
      case 'support':
        return <Support />
      default:
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 font-poppins">
                DataQuery
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter mb-4">
                Ask questions about your Google Sheets data and get instant insights.
              </p>
              <p className="text-sm text-gray-500 font-inter">
                Built by Nyrix
              </p>
            </div>
            <ChatInterface
              webhookUrl="https://nyrix.app.n8n.cloud/webhook/edca0f0a-77c3-43e5-8ece-e514a29446f5/chat"
              onConnectionChange={setIsConnected}
            />
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <FloatingData />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <Header 
          isConnected={isConnected} 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <main className="container mx-auto px-4 py-8">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
