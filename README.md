# DataQuery - AI Data Analysis Chatbot

An intelligent data analysis chatbot that provides insights about your Google Sheets data through natural language conversations. Built with React, Three.js, and integrated with n8n workflows.

## ✨ Features

- **🤖 AI-Powered Chat Interface**: Natural language conversations about your data
- **📊 Smart Data Analysis**: Automatic understanding of column structures and relationships
- **🔗 Google Sheets Integration**: Direct connection to your spreadsheet data
- **💾 Memory Buffer**: Maintains conversation context for follow-up questions
- **🎯 Automated Column Detection**: Identifies and describes your data columns
- **🎨 Beautiful 3D UI**: Modern interface with Three.js animations
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- Your n8n webhook URL (already configured)

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ChatInterface.jsx    # Main chat component
│   ├── Header.jsx           # Navigation header
│   └── FloatingData.jsx     # 3D background elements
├── App.jsx                  # Main application component
├── main.jsx                 # React entry point
└── index.css                # Global styles and Tailwind
```

## 🔧 Configuration

### Webhook Integration

The chatbot is pre-configured to work with your n8n webhook:
```
https://nyrix.app.n8n.cloud/webhook/edca0f0a-77c3-43e5-8ece-e514a29446f5/chat
```

### Environment Variables

Create a `.env` file for custom configurations:
```env
VITE_WEBHOOK_URL=your_custom_webhook_url
VITE_APP_TITLE=DataQuery
```

## 🎨 Customization

### Styling
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Animations**: Adjust 3D animations in `FloatingData.jsx`
- **Layout**: Customize chat interface in `ChatInterface.jsx`

### Features
- **Suggested Questions**: Edit the predefined questions in `ChatInterface.jsx`
- **3D Elements**: Modify floating data objects in `FloatingData.jsx`
- **Chat Behavior**: Adjust typing indicators and message handling

## 🔌 API Integration

The chatbot sends requests to your n8n webhook with this structure:

```json
{
  "message": "user question",
  "conversation_history": [
    {
      "role": "user",
      "content": "previous message"
    },
    {
      "role": "assistant", 
      "content": "previous response"
    }
  ]
}
```

Expected response format:
```json
{
  "response": "AI-generated answer about your data"
}
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Tech Stack

- **Frontend**: React 18 + Vite
- **3D Graphics**: Three.js + React Three Fiber
- **Styling**: Tailwind CSS + Framer Motion
- **HTTP Client**: Axios
- **Icons**: Lucide React

## 🚨 Troubleshooting

### Connection Issues
- Verify your n8n webhook is active
- Check browser console for error messages
- Ensure CORS is properly configured

### Build Issues
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility
- Verify all dependencies are installed

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For issues or questions:
- Check the troubleshooting section
- Review n8n workflow configuration
- Ensure webhook URL is correct and accessible

---

**DataQuery** - Making data analysis as simple as having a conversation! 🚀
