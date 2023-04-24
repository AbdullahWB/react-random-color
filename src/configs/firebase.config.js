import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBODEZqowVwZTogdeHM6olCYh0-AeyqUTw",
  authDomain: "random-color-gen.firebaseapp.com",
  projectId: "random-color-gen",
  storageBucket: "random-color-gen.appspot.com",
  messagingSenderId: "375471610181",
  appId: "1:375471610181:web:0182d2bf679998cb6c062c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;