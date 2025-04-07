# YouTrack Project Management App

This is a YouTrack app that provides project management functionality with the ability to enable/disable project flags.

## Features

- List of available projects
- Toggle to enable/disable project flags
- Flag state persistence on YouTrack server
- Resizable and collapsible sidebar
- Mobile responsive design

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- YouTrack server with admin access

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/youtrack-app.git
cd youtrack-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your YouTrack credentials:
```
VITE_YOUTRACK_URL=your_youtrack_url
VITE_YOUTRACK_TOKEN=your_youtrack_token
```

4. Build and package the app:
```bash
npm run package
```

5. Install the app in YouTrack:
   - Log in to your YouTrack instance as an administrator
   - Go to Administration → Applications
   - Click "Upload Application"
   - Select the `youtrack-app.zip` file
   - Click "Upload"

## Development

To run the app in development mode:

```bash
npm run dev
```

## Building

To build the app for production:

```bash
npm run build
```

To package the app as a .zip file:

```bash
npm run package
```

## Project Structure

```
youtrack-app/
├── src/
│   ├── api/           # API integration with YouTrack
│   ├── components/    # Reusable UI components
│   ├── layout/        # Layout components
│   └── lib/           # Utility functions
├── public/            # Static assets
├── youtrack-app.json  # YouTrack app configuration
└── package.json       # Project dependencies and scripts
```

## License

MIT

## Author

Dongke
