# Bike Rental Frontend

A React-based frontend for the Bike Rental System built with TypeScript, Tailwind CSS, and modern React patterns.

## Features

- 🔐 **Authentication System** - Login with demo credentials
- 🚲 **Bike Management** - View and manage bikes with filtering and search
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🎨 **Modern UI** - Clean, accessible interface with Tailwind CSS
- 🔄 **Real-time Updates** - React Query for efficient data fetching

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **React Query** - Data fetching and caching
- **React Hook Form** - Form handling
- **Headless UI** - Accessible components
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Demo Credentials

Use these credentials to log in:

- **Operator**: `alice` / `password`
- **Fleet Manager**: `carol` / `password`
- **Bike Owner**: `ivan` / `password`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Header.tsx      # Navigation header
│   ├── Login.tsx       # Login form
│   ├── BikeCard.tsx    # Individual bike display
│   └── BikeList.tsx    # Bike list with filters
├── pages/              # Page components
│   ├── HomePage.tsx    # Dashboard/home page
│   ├── LoginPage.tsx   # Login page
│   └── BikesPage.tsx   # Bikes management page
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication state
├── hooks/              # Custom React hooks
├── services/           # API services
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── index.css           # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Components

### Authentication
- **Login** - Clean login form with demo credentials
- **AuthContext** - Manages authentication state
- **Protected Routes** - Guards routes requiring authentication

### Bike Management
- **BikeList** - Displays bikes with search and filtering
- **BikeCard** - Individual bike information card
- **Status Indicators** - Visual status badges for bike states

### Layout
- **Layout** - Main page structure
- **Header** - Navigation with user info and logout

## Development

### Adding New Components

1. Create the component in `src/components/`
2. Add TypeScript interfaces for props
3. Use Tailwind CSS for styling
4. Add to the appropriate page

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the established color scheme (primary-600, etc.)
- Ensure responsive design
- Maintain accessibility standards

### State Management

- Use React Context for global state (auth, user preferences)
- Use local state for component-specific data
- Use React Query for server state management

## API Integration

The frontend is designed to work with the generated TypeScript client from the OpenAPI specification. The client is located in `../generated-client/` and provides type-safe access to all API endpoints.

## Deployment

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist/` directory
3. Deploy the contents of `dist/` to your web server

## Contributing

1. Follow the existing code style
2. Add TypeScript types for all new components
3. Test on both desktop and mobile
4. Ensure accessibility compliance
