# Movie Search App

A modern web application built with React, TypeScript, and Redux Toolkit for searching and exploring movies.

## Features

- Modern React with TypeScript
- State management with Redux Toolkit and RTK Query
- Routing with React Router
- Responsive UI components with Lucide React icons
- Built with Vite for fast development and optimized production builds
- Fetches movie data from the public [TMDb API](https://www.themoviedb.org/documentation/api)

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

## Getting Started

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Make a copy of the `.env.example` file and rename it to `.env`.

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` by default.


## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/             # Page components
├── store/             # Redux store configuration
├── styles/            # Global styles and SCSS files
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── RootComponent.tsx  # Routes definitions
```

## Technologies Used

- React 19
- TypeScript
- Redux Toolkit
- React Router
- Vite
- ESLint
- Prettier
- Vitest
- SASS

## Testing

Tests are written using Vitest and React Testing Library. Run the tests with:

```bash
npm run test
```

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.
