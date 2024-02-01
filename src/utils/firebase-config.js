import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const {
  VITE_FIREBAE_API_KEY,
  VITE_FIREBASE_AUTH_DOMAIN,
  VITE_FIREBAE_PROJECT_ID,
  VITE_FIREBAE_STORAGE_BUCKET,
  VITE_FIREBAE_MESSAGING_SENDER_ID,
  VITE_FIREBAE_APP_ID,
} = import.meta.env;
const firebaseConfig = {
  apiKey: VITE_FIREBAE_API_KEY,
  authDomain: VITE_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_FIREBAE_PROJECT_ID,
  storageBucket: VITE_FIREBAE_STORAGE_BUCKET,
  messagingSenderId: VITE_FIREBAE_MESSAGING_SENDER_ID,
  appId: VITE_FIREBAE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
