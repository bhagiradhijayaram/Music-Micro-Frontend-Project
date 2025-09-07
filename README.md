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
