// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_LDo_xRN2lhKddZ-uKaVqA0i3QOvKGX4",
  authDomain: "my-guest-book-74082.firebaseapp.com",
  projectId: "my-guest-book-74082",
  storageBucket: "my-guest-book-74082.appspot.com",
  messagingSenderId: "799855747807",
  appId: "1:799855747807:web:29c722410e1af764b47f6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

// register an user
const registerUserWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (error) {
    throw error;
  }
};

// login with email & password
const loginInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    throw error;
  }
};

// reset password
const passwordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};

// sign in with google account
const signInWithGoogle = async () => {
  try {
    const res = signInWithPopup(auth, googleAuthProvider);
    const user = res.user;
    return user;
  } catch (error) {
    throw error;
  }
};

export {
  auth,
  loginInWithEmailAndPassword,
  passwordReset,
  registerUserWithEmailAndPassword,
  signInWithGoogle,
};
