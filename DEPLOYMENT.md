# Deployment Guide

This guide will help you deploy your MERN stack portfolio to the cloud for free.

## prerequisites
- GitHub Account
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) Account (Free Tier)
- [Render](https://render.com/) Account (for Backend)
- [Vercel](https://vercel.com/) Account (for Frontend)

## 1. Minimal Database Setup (MongoDB Atlas)
1.  Log in to MongoDB Atlas and create a new **Cluster** (Shared/Free).
2.  Go to **Database Access** -> Create a new database user (keep username/password safe).
3.  Go to **Network Access** -> Add IP Address -> Allow Access from Anywhere (`0.0.0.0/0`).
4.  Go to **Database** -> Connect -> Drivers -> Copy the connection string.
    - Replace `<password>` with your actual user password.
    - Example: `mongodb+srv://user:password@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority`

## 2. Backend Deployment (Render)
1.  Log in to [Render](https://render.com/).
2.  Click **New +** -> **Web Service**.
3.  Connect your GitHub repository.
4.  Select the repository `Portfolio`.
5.  Configure the service:
    - **Root Directory**: `backend` (Important!)
    - **Build Command**: `npm install`
    - **Start Command**: `node server.js`
6.  Scroll down to **Environment Variables**:
    - Key: `MONGODB_URI` Value: Your MongoDB Connection String.
    - Key: `PORT` Value: `5000` (Optional, Render sets a port automatically, but good to have).
7.  Click **Create Web Service**.
8.  Wait for deployment to finish. **Copy the URL** provided by Render (e.g., `https://portfolio-backend.onrender.com`).

## 3. Frontend Deployment (Vercel)
1.  Log in to [Vercel](https://vercel.com/).
2.  Click **Add New...** -> **Project**.
3.  Import the `Portfolio` repository.
4.  Configure the project:
    - **Framework Preset**: Vite (should be auto-detected).
    - **Root Directory**: Click `Edit` and select `frontend`.
5.  **Environment Variables**:
    - Key: `VITE_API_BASE_URL`
    - Value: The URL of your deployed Backend (e.g., `https://portfolio-backend.onrender.com/api`).
    - **Note**: Ensure you append `/api` if your backend routes are prefixed with it (which they are!).
6.  Click **Deploy**.

## 4. Final Polish
1.  Once Vercel deploys, open your live website URL.
2.  Test the **Projects** section (data comes from backend).
3.  Test the **Contact** form.

🎉 **Done! Your portfolio is live.**
