# Restaurant App

A full-stack restaurant application built with the MERN stack (MongoDB, Express.js, React, Node.js) and TypeScript.

## Features

- User authentication using Auth0
- Restaurant browsing and searching
- Menu management
- Order tracking
- User profile management
- Responsive design

## Tech Stack

### Frontend
- React with TypeScript
- Auth0 for authentication
- React Router for navigation
- Tailwind CSS for styling
- Vite as build tool

### Backend
- Node.js with Express
- TypeScript
- MongoDB with Mongoose
- JWT authentication
- Express OAuth2 JWT Bearer

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Auth0 account
- npm or yarn

## Environment Variables

### Frontend (.env)
```
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_AUTH0_CALLBACK_URL=your-auth0-callback-url
VITE_AUTH0_AUDIENCE=your-auth0-audience
```

### Backend (.env)
```
MONGODB_URI=your-mongodb-connection-string
AUTH0_AUDIENCE=your-auth0-audience
AUTH0_ISSUER_BASE_URL=your-auth0-issuer-base-url
```

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd restaurant-app
```

2. Install dependencies:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables:
   - Create `.env` files in both frontend and backend directories
   - Add the required environment variables as shown above

4. Start the development servers:

```bash
# Start backend server (from backend directory)
npm run dev

# Start frontend server (from frontend directory)
npm run dev
```

The backend server will run on `http://localhost:7000` and the frontend on `http://localhost:5173`.

## Project Structure

```
restaurant-app/
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   ├── auth/         # Authentication related code
│   │   └── ...
│   └── ...
├── backend/               # Express backend
│   ├── src/
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # Mongoose models
│   │   ├── routes/       # Express routes
│   │   ├── middleware/   # Custom middleware
│   │   └── ...
│   └── ...
└── README.md
```

## API Endpoints

### User Routes
- `POST /api/my/user` - Create new user
- `PUT /api/my/user` - Update user profile
- `GET /api/my/user` - Get current user

### Restaurant Routes
- `GET /api/restaurant` - Get all restaurants
- `GET /api/restaurant/:id` - Get restaurant by ID
- `POST /api/restaurant` - Create new restaurant
- `PUT /api/restaurant/:id` - Update restaurant
- `DELETE /api/restaurant/:id` - Delete restaurant

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
