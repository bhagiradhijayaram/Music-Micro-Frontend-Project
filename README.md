# Music Micro-Frontend Project

This project demonstrates **Micro Frontend Architecture** using **React 19, Vite, and Module Federation**.  
It is split into two independently deployable apps:

- **Main App (Host)** → Handles authentication, protected routes, and integrates the remote app.  
- **Music Library (Remote App)** → Standalone micro frontend for managing and browsing songs.  

Both apps are deployed on **Netlify** with role-based authentication (Admin & User).

---

## 🚀 Tech Stack
- React 19  
- Vite + vite-plugin-federation  
- TailwindCSS  
- React Router DOM  
- LocalStorage (for dummy authentication)  
- Netlify (deployment)  

---

## ⚡ Features
- 🔐 Role-based authentication (Admin & User)  
- 🎵 Music Library with **filter, sort, and group by** (using `map`, `filter`, `reduce`)  
- 🧩 Micro-frontend architecture (independent deploys)  
- 🌍 Deployed on Netlify (separate links for host and remote)  
- 🎨 Responsive UI with TailwindCSS  

---

## 🛠️ How to Run Locally

### 1. Clone the repositories
```bash
https://github.com/bhagiradhijayaram/Music-Micro-Frontend-Project.git
```
### 2. Install dependencies
```bash
cd main-app
npm install

cd ../music-library
npm install
```
### 3. Start development servers
```bash
# In music-library
npm run dev

# In another terminal, for main-app
npm run dev
```
### Demo Credentials
Admin

- Username: admin
- Password: admin123
User

- Username: user
- Password: user123
### Deployment

- Both apps are deployed on Netlify.

- music-library builds into /dist → Netlify hosts remoteEntry.js

- main-app fetches the remoteEntry.js from the deployed music-library

### Live Demo Links

- Main App (Host): https://main-host.netlify.app/
- Music Library (Remote): https://micro-frontend-music-library.netlify.app/
  
### UI Preview
<img width="1920" height="912" alt="screencapture-localhost-5000-login-2025-09-07-14_47_22" src="https://github.com/user-attachments/assets/ead591fa-4986-448b-afb3-58c4ccc995e4" /> 

<img width="1920" height="1648" alt="screencapture-localhost-5000-admin-dashboard-2025-09-07-14_49_10" src="https://github.com/user-attachments/assets/893d9596-3d29-454e-a2ff-717f5ee99972" />

<img width="1920" height="1573" alt="screencapture-localhost-5000-user-dashboard-2025-09-07-14_48_47" src="https://github.com/user-attachments/assets/981ab78c-d57d-423e-bf07-c53ccaca14ea" /> 

<img width="1920" height="1648" alt="screencapture-localhost-5000-admin-dashboard-2025-09-07-14_49_26" src="https://github.com/user-attachments/assets/ee35aecc-ab9c-4b56-a1a1-959118c506a5" /> 

<img width="259" height="1147" alt="screencapture-localhost-5000-admin-dashboard-2025-09-07-14_51_05" src="https://github.com/user-attachments/assets/af48fd31-86f7-4394-88c1-d09f41d5f7d0" /> 

<img width="259" height="560" alt="screencapture-localhost-5000-login-2025-09-07-14_51_28" src="https://github.com/user-attachments/assets/e62a1952-d0d7-4df0-98b9-1af107da7023" />




