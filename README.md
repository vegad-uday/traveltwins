React + Vite + Tailwind CSS

A fast and modern frontend setup using React, Vite, and Tailwind CSS.
This template provides a minimal starting point with optimized developer experience.

🚀 Features

⚡ Vite — super-fast dev server and optimized builds

⚛️ React 18 — component-based UI

🎨 Tailwind CSS — utility-first styling

🛠️ Hot Module Replacement (HMR)

📁 Clean folder structure

🔧 Ready for production build

Make sure you have Node.js 16+ installed.

  ```
npm install
```
Run Development Server

```
npm run dev
```


Tailwind CSS Configuration

Tailwind is already set up in:

tailwind.config.js:
```
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};


```
src/App.css:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```



🔥 Firebase Setup
1️⃣ Create Firebase Project

Go to Firebase Console

Create a new Firebase project

Enable Authentication → Sign-in Providers

Enable Email/Password or Google sign-in

2️⃣ Install Firebase SDK

```
npm install firebase
```
Add Firebase Config

Create:

src/firebase/firebaseConfig.js
```
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
```
Setup Environment Variables

Create a file: .env
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

```
