<h1>DeepSeek AI-Clone</h1>
This project is a full-stack clone of DeepSeek AI, built to replicate its sleek user interface and intelligent chat-driven experience. The goal of this clone is to understand the architectural design of modern AI platforms, explore the integration of real-time messaging, and implement webhook-based user authentication using Clerk and Svix. Built with Next.js, Tailwind CSS, MongoDB, and Node.js, this clone serves as both a learning exercise and a foundation for expanding AI-driven interfaces in future projects. Whether you're exploring AI UX patterns or studying full-stack development, this repository offers a comprehensive deep dive into how DeepSeek-style platforms are structured under the hood.

## Technical Infrastructure
- **Frontend**
  - React.js
  - Next.js
  - Tailwind CSS

- **Backend**
  - Node.js
  - Express.js

- **Database**
  - MongoDB
  - Mongoose

- **API Integration**
  - Axios

- **Authentication**
  - Clerk
  - Svix Webhooks

- **Deployment**
  - Vercel

  - **Notifications**
  - React-hot-Toast

## Key Features

- Intuitive UI inspired by DeepSeek
- Realtime webhook event handling
- Custom user onboarding flow
- Syntax-highlighted code block support
- Fully responsive and accessible

## DeepSeek AI-Clone Folder Structure
```bash
deepseek-clone/
├── app/
|    ├── layout.jsx       # layout app endpoint
|    ├── Page.jsx         # page app endpoint
|    ├── prism.css        # prism css endpoint
|    ├── globals.css      # globals css endpoint
├── api/
│   ├── chat/
│   │   │   ├── ai/              # AI chat endpoint
|   |   |   |    └── route.js    # AI routejs endpoint
│   │   │   ├── rename/          # Rename chat endpoint
|   |   |   |    └── route.js    # Rename routejs endpoint
│   │   │   └── delete/          # Delete chat endpoint
|   |   |   |    └── route.js    # Delete routejs endpoint
│   └── clerk/                   # Clerk webhook integration
|   |   |   └── route.js         # Clerk routejs endpoint
├── components/
│   ├── ChatLabel.jsx            # Chat label component
│   ├── PromptBox.jsx            # Chat input box component
│   └── Sidebar.jsx              # Sidebar for chat navigation
├── context/
│   └── AppContext.jsx           # Global state management
├── config/
│   └── db.js                    # MongoDB connection configuration
├── models/
│   └── User.js                  # User model schema
├── public/
│   └── assets/                  # Static assets (icons, images)
├── styles/
│   └── globals.css              # Global styles
└── README.md                    # Project documentation
```

## Packages Installation & Project Setup
1. Install NEXT.js on cmd
```bash
npx create-next-app@latest
```
2. Install dependencies:
```bash
npm i axios mongoose openai svix prismjs react-hot-toast react-markdown
```
3. Set up environment variables: Create a .env file in the root directory and add the following:
```bash
MONGO_URI=your-mongodb-connection-string
SIGNING_SECRET=your-svix-signing-secret
CLERK_SECRET_KEY=your-clerk-secret-key
DEEPSEEK_API_KEY=your-deepseek-api-key
```
4. Run the development server:
```bash
npm run dev
```
5. Open the application in your browser:
```bash
http://localhost:3000
```
