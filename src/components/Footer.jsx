import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 font-inter">
            DataQuery is built by{' '}
            <a 
              href="https://nyrix.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Nyrix
            </a>
            
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
