import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TO-DO: Replace the following with your app's environment configuration
// eslint-disable-next-line no-unused-vars
const nodeEnv = process.env.NEXT_PUBLIC_NODE_ENV as string;

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: process.env
    .NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string,
};

let firebaseApp: FirebaseApp;

// TO-DO: create interface for firebaseConfig
const initFirebase = (config: any) => {
  if (!config) throw new Error("Missing firebase config environment variables");

  if (!firebaseApp) {
    firebaseApp = initializeApp(config);

    console.info("✅ Firebase connected!");
  }

  return firebaseApp;
};

export const app = initFirebase(config);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
