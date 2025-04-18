<h1>DeepSeek AI-Clone</h1>

## Getting Started
First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

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
