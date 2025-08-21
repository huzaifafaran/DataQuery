import React from 'react'
import { 
  Brain, 
  BarChart3, 
  Database, 
  MessageSquare, 
  Mail,
  Zap, 
  Shield, 
  Smartphone,
  Globe,
  TrendingUp,
  Users
} from 'lucide-react'

const Features = ({ onTabChange }) => {
  const features = [
    {
      icon: Brain,
      title: 'AI Data Analysis',
      description: 'AI-powered analysis that understands your Google Sheets data and answers questions accurately.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Google Sheets Integration',
      description: 'Direct access to your spreadsheet data through secure Google Sheets API integration.',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Queries',
      description: 'Ask questions about your data in plain English and get clear, factual responses.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Mail,
      title: 'Email Reports',
      description: 'Request data insights to be sent via email in formatted HTML for easy sharing.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Your data stays within Google\'s secure infrastructure - we never store your information.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Responsive design that works well on all devices and screen sizes.',
      color: 'from-cyan-500 to-blue-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 font-poppins">
            Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Discover how DataQuery makes your data analysis simple and effective
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 font-poppins">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-inter">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-poppins">
              Ready to Start?
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-inter">
              Begin analyzing your Google Sheets data with simple questions.
            </p>
            <button 
              onClick={() => onTabChange('chat')}
              className="bg-gradient-to-r from-primary-500 to-data-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-primary-600 hover:to-data-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Chatting Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
