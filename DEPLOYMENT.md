# Deployment Guide

## Pre-Deployment Checklist

### Server Configuration

1. **MongoDB Setup**
   - Create a MongoDB Atlas cluster
   - Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/skillstack`

2. **Environment Variables** (`server/.env`)
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET_ADMIN=use_a_strong_random_string
   JWT_SECRET_USER=use_a_strong_random_string
   CLIENT_URL=your_client_domain_or_localhost
   NODE_ENV=production
   ```

3. **Generate Strong Secrets**
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

### Client Configuration

1. **Build the Client**
   ```bash
   cd client
   npm install
   npm run build
   ```

2. **Environment Variables** (`client/.env`)
   ```
   VITE_BACKEND_URL=http://your-server-url:5000
   ```
   - For local: `http://localhost:5000`
   - For production: `https://your-domain.com` (without port)

## Local Testing

```bash
# Terminal 1: Start the server
cd server
npm install
npm start

# Terminal 2: Start the client (for development)
cd client
npm install
npm run dev

# OR build and test with server serving
cd client
npm run build
```

Server will run on `http://localhost:5000` and serve the built client.

## Production Deployment

### Option 1: Self-Hosted (Linux/Windows Server)

1. **Install Node.js and npm**
   ```bash
   # Ubuntu/Debian
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Clone and Setup**
   ```bash
   git clone <your-repo>
   cd SkillStack-main
   ```

3. **Install Dependencies**
   ```bash
   cd server && npm install
   cd ../client && npm install && npm run build
   cd ..
   ```

4. **Configure Environment**
   - Update `server/.env` with production values
   - Update `client/.env` with production backend URL

5. **Run Server**
   ```bash
   cd server
   npm start
   ```

6. **Use Process Manager (PM2)**
   ```bash
   npm install -g pm2
   pm2 start index.js --name skillstack
   pm2 save
   pm2 startup
   ```

### Option 2: Heroku

1. **Create Heroku App**
   ```bash
   heroku create your-app-name
   ```

2. **Add Environment Variables**
   ```bash
   heroku config:set PORT=5000
   heroku config:set MONGODB_URI="your_mongodb_uri"
   heroku config:set JWT_SECRET_ADMIN="strong_secret"
   heroku config:set JWT_SECRET_USER="strong_secret"
   heroku config:set CLIENT_URL="your-app-name.herokuapp.com"
   ```

3. **Deploy**
   ```bash
   git push heroku main
   ```

### Option 3: Docker

1. **Create Dockerfile**
   ```dockerfile
   FROM node:20
   WORKDIR /app
   COPY . .
   RUN cd client && npm install && npm run build
   RUN cd server && npm install
   EXPOSE 5000
   CMD ["node", "server/index.js"]
   ```

2. **Build and Run**
   ```bash
   docker build -t skillstack .
   docker run -p 5000:5000 -e MONGODB_URI="uri" -e JWT_SECRET_ADMIN="secret" -e JWT_SECRET_USER="secret" skillstack
   ```

## Troubleshooting

### "Cannot find module" errors
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### CORS errors
- Check `CLIENT_URL` in server `.env`
- Ensure client URL matches deployment domain
- Verify credentials in fetch requests

### MongoDB connection fails
- Verify connection string is correct
- Check IP whitelist in MongoDB Atlas (add 0.0.0.0/0)
- Ensure database name is correct

### 404 on routes (static files not serving)
- Ensure `npm run build` was run in client folder
- Verify path exists: `server/../client/dist`
- Check server logs for file serving errors

### Authentication not working
- Clear browser localStorage
- Verify JWT secrets are set correctly
- Check token is included in Authorization header

## Performance Tips

1. **Enable gzip compression**
   ```javascript
   import compression from 'compression';
   app.use(compression());
   ```

2. **Add caching headers**
3. **Use CDN for static assets**
4. **Optimize MongoDB indexes**
5. **Monitor server logs and errors**

## Security Checklist

- ✅ Use strong JWT secrets (40+ characters)
- ✅ Never commit `.env` file
- ✅ Enable HTTPS in production
- ✅ Set `NODE_ENV=production`
- ✅ Use environment variables for all secrets
- ✅ Keep dependencies updated
- ✅ Validate input on both client and server
