import React from 'react'
import { 
  Lightbulb, 
  Target, 
  Award, 
  Heart, 
  Code, 
  Rocket,
  Users,
  Globe,
  Zap,
  Shield
} from 'lucide-react'

const About = ({ onTabChange }) => {
  const stats = [
    { icon: Users, number: 'Built by', label: 'Nyrix Team' },
    { icon: Zap, number: 'AI Powered', label: 'Data Analysis' },
    { icon: Globe, number: 'Integrates with', label: 'Google Sheets' },
    { icon: Shield, number: 'Secure', label: 'Data Access' }
  ]

  const values = [
    {
      icon: Lightbulb,
      title: 'Simplicity',
      description: 'Making data analysis as simple as asking a question.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Target,
      title: 'Accuracy',
      description: 'Providing reliable, factual answers based on your actual data.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Practical',
      description: 'Focusing on real-world use cases and everyday data needs.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Code,
      title: 'Reliable',
      description: 'Built with proven technology for consistent performance.',
      color: 'from-blue-500 to-indigo-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 font-poppins">
            About DataQuery
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-inter leading-relaxed">
            A simple, effective way to analyze your Google Sheets data using natural language and AI.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16">
          <div className="text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-primary-500 to-data-500 mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-inter leading-relaxed">
              To make data analysis simple and accessible. Ask questions about your Google Sheets data 
              in plain English and get clear, accurate answers.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full flex flex-col justify-center min-h-[160px]">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-primary-500 to-data-500 mb-4 mx-auto">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-poppins leading-tight">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-inter leading-relaxed">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 font-poppins">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${value.color} mb-6`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 font-poppins">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-inter">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 font-inter leading-relaxed">
                <p>
                  DataQuery was created to solve a simple problem: making Google Sheets data analysis easier 
                  through natural language questions.
                </p>
                <p>
                  By combining AI with Google Sheets integration, we've created a tool that lets you 
                  ask questions about your data and get immediate answers.
                </p>
                <p>
                  Built by Nyrix, DataQuery focuses on simplicity and effectiveness for everyday data analysis needs.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex p-8 rounded-3xl bg-gradient-to-r from-primary-500 to-data-500">
                <Award className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-500 to-data-500 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
              Try DataQuery Today
            </h2>
            <p className="text-xl mb-8 font-inter opacity-90">
              Start analyzing your Google Sheets data with simple questions
            </p>
            <button 
              onClick={() => onTabChange('chat')}
              className="bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
