import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TO-DO: Replace the following with your app's environment configuration
// eslint-disable-next-line no-unused-vars
const nodeEnv = process.env.NEXT_PUBLIC_NODE_ENV as string;

const config = {
  apiKey: process.env.NEXT_PUBLIC_ENV_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_ENV_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_ENV_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_ENV_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_ENV_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_ENV_APP_ID,
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
//projeto ja iniciado
export const app = initFirebase(config);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
