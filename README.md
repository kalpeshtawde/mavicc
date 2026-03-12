# Mavi Collision Center (MAVICC)

A modern, responsive website for Mavi Collision Center built with React, Vite, React Router v6, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Built with Tailwind CSS and custom color palette
- **React Router v6**: Client-side routing for seamless navigation
- **EmailJS Integration**: Contact form with email functionality
- **Gallery System**: Dynamic image gallery with category filtering and lightbox
- **Docker Ready**: Containerized deployment with Docker and nginx

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **React Router v6**: Declarative routing
- **Tailwind CSS**: Utility-first CSS framework
- **EmailJS**: Email service integration
- **Docker**: Containerization
- **Nginx**: Production web server

## Getting Started

### Prerequisites

- Node.js 18 or higher
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

3. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Docker Deployment

### Build and run with Docker Compose:

```bash
docker-compose up -d
```

The application will be available at `http://localhost`

### Build Docker image manually:

```bash
docker build -t mavicc .
docker run -p 80:80 mavicc
```

## EmailJS Configuration

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Update the following in `src/pages/Contact.jsx`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

## Project Structure

```
mavicc/
├── public/
│   └── images/
│       └── gallery-manifest.json
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── About.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── tailwind.config.js
└── package.json
```

## Color Palette

- **Primary**: #1CA0F1 (Mavi Blue)
- **Accent**: #FCD116 (Road Yellow)
- **Navy**: #0A1628
- **Midnight**: #020817
- **Steel**: #334155
- **Slate**: #64748B
- **Silver**: #CBD5E1
- **Ice**: #E0F2FE
- **Soft White**: #F8FAFC
- **Warm White**: #FFFBEB
- **Success**: #22C55E
- **Danger**: #EF4444

## License

Copyright © 2024 Mavi Collision Center. All rights reserved.
