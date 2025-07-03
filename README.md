### Likho Frontend README

```markdown
# Likho BlogApp (Frontend)

![Likho Frontend Preview](/public/Preview.png)

Modern Next.js frontend for Likho blogging platform with responsive design, SSR, and seamless Django backend integration. Deployed on Vercel.

## Features
- 🧑‍💻 JWT Authentication (login/signup)
- ✍️ CRUD operations for blog posts
- 💬 Real-time comments with nesting
- 🏷️ Tag-based categorization
- 🌗 Dark/light mode toggle
- 🔍 Search and filters
- 📱 Fully responsive design
- ⚡ SSR/ISR optimization
- 🎨 Framer Motion animations

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State**: Context API + useReducer
- **HTTP**: Axios
- **Editor**: TipTap
- **Deployment**: Vercel

## Live Demo
https://likho-blogapp.vercel.app

## Installation
```bash
git clone https://github.com/your-username/likho-frontend.git
cd likho-frontend
npm install
cp .env.example .env.local
npm run dev
```

## Project Structure

src/
├── app/           # App router
├── components/    # Reusable UI
├── context/       # State management
├── hooks/         # Custom hooks
├── lib/           # Utilities
├── services/      # API handlers
├── styles/        # Global CSS
└── types/         # TypeScript types
