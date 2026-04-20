# Quick Start Checklist

## For Local Development

- [ ] Install Node.js v20+
- [ ] Clone the repository
- [ ] Create `server/.env` with correct values
- [ ] Create `client/.env` with correct values
- [ ] Run `cd client && npm install`
- [ ] Run `cd server && npm install`
- [ ] Run `npm start` in server folder
- [ ] Run `npm run dev` in client folder (or `npm run build` then test with server)
- [ ] Test signup/signin functionality
- [ ] Test course purchase flow

## For Production Deployment

### Before Deploying

- [ ] Build client: `cd client && npm run build`
- [ ] Verify server/.env has all required variables
- [ ] Verify MONGODB_URI is accessible from production server
- [ ] Generate strong JWT secrets
- [ ] Update CLIENT_URL in server/.env to your domain
- [ ] Update VITE_BACKEND_URL in client/.env to your server URL

### Deployment Steps

- [ ] Upload code to server
- [ ] Install dependencies: `npm install` in both folders
- [ ] Build client: `npm run build` in client folder
- [ ] Start server with PM2 or similar
- [ ] Test all endpoints
- [ ] Enable HTTPS/SSL certificate
- [ ] Set up monitoring and error logging

### After Deployment

- [ ] Test user signup
- [ ] Test admin signup
- [ ] Test course creation (admin)
- [ ] Test course purchase (user)
- [ ] Test course viewing
- [ ] Check browser console for errors
- [ ] Monitor server logs
- [ ] Set up automated backups for MongoDB

## Common Port Assignments

- Development Server: 5000
- Development Client: 5173 (Vite default)
- Production Server: 80 (HTTP) or 443 (HTTPS)

## Environment Variables

### Server (.env)
```
PORT=5000
MONGODB_URI=mongodb+srv://...
JWT_SECRET_ADMIN=<40+ char random string>
JWT_SECRET_USER=<40+ char random string>
CLIENT_URL=http://localhost:5000
NODE_ENV=production
```

### Client (.env)
```
VITE_BACKEND_URL=http://localhost:5000
```

## Useful Commands

```bash
# Build client for production
npm run build

# Start development server
npm run dev

# Start production server
npm start

# Check for errors
npm run lint

# View server logs (PM2)
pm2 logs skillstack
```

## Emergency Troubleshooting

**App shows README instead of website**
- Build client: `npm run build` in client folder
- Verify dist folder exists
- Check server logs

**API calls fail with 404**
- Check backend URL in client .env
- Verify server is running
- Check CORS settings in server

**Cannot login**
- Clear browser localStorage
- Check database connection
- Verify JWT secrets are set

**Database connection fails**
- Verify MongoDB connection string
- Check IP whitelist in MongoDB Atlas
- Test connection string manually
