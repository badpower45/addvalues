# CodePulse Website Build

## Overview
CodePulse is a modern, professional programming company website built with React, TypeScript, and Vite. The website features smooth animations, responsive design, and a comprehensive portfolio showcase.

## Project Architecture

### Tech Stack
- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, Lucide React
- **Animations**: Motion (Framer Motion)
- **Routing**: Client-side hash-based routing

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Radix UI-based components
│   ├── figma/          # Figma-specific components
│   └── [pages]         # Page-specific components
├── pages/              # Main page components
├── styles/             # Global styles
└── App.tsx             # Main application component
```

## Recent Changes

### October 13, 2025 - Replit Environment Setup
- Created TypeScript configuration (tsconfig.json, tsconfig.node.json)
- Updated Vite config to use port 5000 with 0.0.0.0 host for Replit compatibility
- Added allowedHosts: true to support Replit proxy and fix host blocking issues
- Fixed Tailwind CSS configuration to use ESM imports (tailwindcss-animate)
- Fixed all React import issues for TypeScript (no LSP errors)
- Configured deployment settings for autoscale deployment
- Set up development workflow with npm run dev
- All dependencies installed successfully (@tailwindcss/postcss for Tailwind v4)
- Enhanced portfolio page with professional animations and responsive design
- Website is fully responsive and smooth with professional UI/UX
- HMR (Hot Module Replacement) working correctly

## Development

### Running Locally
```bash
npm run dev
```
The development server runs on port 5000 with hot module replacement enabled.

### Building for Production
```bash
npm run build
```
Builds are output to the `build/` directory.

### Deployment
The project is configured for Replit autoscale deployment:
- Build command: `npm run build`
- Start command: `npx vite preview --host 0.0.0.0 --port`

## Features

### Pages
- **Home**: Hero section, services overview, testimonials
- **Services**: Detailed service offerings
- **About**: Company information and team
- **Portfolio**: Project showcase (enhanced with professional animations)
- **Contact**: Contact form and information
- **MVP**: Free MVP offering page

### Key Components
- Responsive navigation header with dark mode toggle
- Animated page transitions
- Smooth scroll and back-to-top functionality
- Help widget for user assistance
- Contact form with validation
- Accessible design with skip-to-content link

## User Preferences
- User wants smooth, professional animations throughout
- Focus on making portfolio page highly professional
- Responsive design is critical
- Website represents a programming company, so quality is paramount

## Dependencies

### Core
- react, react-dom
- vite, @vitejs/plugin-react-swc
- typescript

### UI & Styling
- tailwindcss, postcss, autoprefixer
- @radix-ui/* components
- lucide-react (icons)
- motion (animations)

### Forms & Utilities
- react-hook-form
- sonner (toast notifications)
- next-themes (dark mode)

## Notes
- Project uses hash-based routing for GitHub Pages compatibility
- Dark mode is persisted in localStorage
- All animations use motion library for professional effects
- Vite HMR configured for Replit proxy environment
