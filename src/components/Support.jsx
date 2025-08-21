import React from 'react'
import { 
  HelpCircle, 
  BookOpen, 
  MessageSquare, 
  Mail, 
  Database, 
  Zap,
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Code
} from 'lucide-react'

const Support = () => {
  const faqs = [
    {
      question: 'How do I ask questions about my Google Sheets data?',
      answer: 'Simply type your question in natural language. For example: "What is the total sales for Q1?" or "Show me the top 5 customers by revenue." DataQuery will automatically analyze your spreadsheet and provide accurate answers.',
      icon: MessageSquare
    },
    {
      question: 'What types of questions can I ask?',
      answer: 'You can ask about any data in your spreadsheet: calculations, summaries, filtering, sorting, trends, comparisons, and more. DataQuery understands natural language and will interpret your intent.',
      icon: Database
    },
    {
      question: 'How does the email functionality work?',
      answer: 'When you ask DataQuery to send an email, it will format your data analysis results in beautiful HTML and send it to the specified recipients. Perfect for sharing insights with your team.',
      icon: Mail
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes! DataQuery only accesses the specific Google Sheets you authorize. Your data never leaves Google\'s secure infrastructure, and we don\'t store any of your information.',
      icon: CheckCircle
    },
    {
      question: 'What if DataQuery can\'t answer my question?',
      answer: 'DataQuery will clearly tell you if the requested information isn\'t available in your dataset. It won\'t make assumptions or provide incorrect information.',
      icon: AlertCircle
    }
  ]

  const examples = [
    {
      type: 'Basic Analysis',
      examples: [
        'What is the total revenue?',
        'How many customers do we have?',
        'What is the average order value?'
      ]
    },
    {
      type: 'Filtering & Sorting',
      examples: [
        'Show me sales from last month',
        'Who are our top 10 customers?',
        'What products sold the most?'
      ]
    },
    {
      type: 'Calculations',
      examples: [
        'Calculate the profit margin for each product',
        'What is the year-over-year growth?',
        'Show me the running total of sales'
      ]
    },
    {
      type: 'Email Reports',
      examples: [
        'Send me a weekly sales summary',
        'Email the monthly report to the team',
        'Create and send a customer analysis report'
      ]
    }
  ]

  const troubleshooting = [
    {
      issue: 'No response from DataQuery',
      solution: 'Check your internet connection and ensure your Google Sheets are accessible. Try refreshing the page.',
      icon: AlertCircle
    },
    {
      issue: 'Incorrect data analysis',
      solution: 'Verify that your Google Sheets contain the data you\'re asking about. DataQuery only works with the data in your authorized spreadsheets.',
      icon: Database
    },
    {
      issue: 'Email not sending',
      solution: 'Ensure you\'ve provided a valid email address and that your Google account has permission to send emails.',
      icon: Mail
    },
    {
      issue: 'Slow response times',
      solution: 'Large datasets may take longer to process. Try asking more specific questions or breaking down complex queries.',
      icon: Zap
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 font-poppins">
            Support & Help
          </h1>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
              Learn how to use DataQuery effectively with helpful examples and troubleshooting tips
            </p>
        </div>

        {/* Quick Start Guide */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-primary-500 to-data-500 mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Quick Start Guide
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-3 rounded-xl bg-blue-100 mb-4">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 font-poppins">1. Connect Your Data</h3>
              <p className="text-gray-600 text-sm font-inter">
                Authorize DataQuery to access your Google Sheets. Your data stays secure and private.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-3 rounded-xl bg-green-100 mb-4">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 font-poppins">2. Ask Questions</h3>
              <p className="text-gray-600 text-sm font-inter">
                Type your questions in natural language. DataQuery understands context and provides accurate answers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-3 rounded-xl bg-purple-100 mb-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 font-poppins">3. Share Insights</h3>
              <p className="text-gray-600 text-sm font-inter">
                Request email reports to share your data insights with your team in beautiful HTML format.
              </p>
            </div>
          </div>
        </div>

        {/* Example Questions */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 font-poppins">
            Example Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examples.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 font-poppins">
                  {category.type}
                </h3>
                <ul className="space-y-2">
                  {category.examples.map((example, idx) => (
                    <li key={idx} className="text-sm text-gray-600 font-inter">
                      • {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 font-poppins">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-primary-100">
                    <faq.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 font-poppins">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 font-poppins">
            Troubleshooting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {troubleshooting.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-red-100">
                    <item.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 font-poppins">
                      {item.issue}
                    </h3>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-500 to-data-500 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
              Need More Help?
            </h2>
            <p className="text-xl mb-8 font-inter opacity-90">
              Need help with DataQuery? Reach out to us at{' '}
              <a 
                href="mailto:huzaifa@nyrix.co" 
                className="text-white hover:text-gray-200 underline transition-colors font-medium"
              >
                huzaifa@nyrix.co
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
