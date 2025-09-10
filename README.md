# Ninh Binh Tourism Landing Page

A modern, responsive website for showcasing tourism services in Ninh Binh, Vietnam. This project was built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Modern UI**: Clean and attractive interface designed to showcase tourism experiences
- **Tour Booking System**: Integrated booking form for users to reserve tours
- **Blog Section**: Display travel tips and information about Ninh Binh
- **Newsletter Subscription**: Allow visitors to subscribe for updates

## Tech Stack

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS + Material UI Components
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ninh-binh-tourism-landing-page-fe.git
cd ninh-binh-tourism-landing-page-fe
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
src/
├── api/           # API services and axios config
├── assets/        # Static assets (images, etc.)
├── components/    # Reusable UI components
│   ├── common/    # Common UI elements
│   ├── layout/    # Layout components (Header, Footer)
│   ├── home/      # Homepage specific components
│   ├── tours/     # Tour related components
│   └── blog/      # Blog related components
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
```

## Deployment

This project is configured for deployment on GitHub Pages. To deploy:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images courtesy of Unsplash
- Icons from Material UI