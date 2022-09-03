// Import the functions you need from the SDKs you need
import { Alert } from "@mui/material";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjNQZ9GjJ196Tm7I7VfZNVzMgBdxy-A_g",
  authDomain: "kembang15-accd4.firebaseapp.com",
  projectId: "kembang15-accd4",
  storageBucket: "kembang15-accd4.appspot.com",
  messagingSenderId: "624366280103",
  appId: "1:624366280103:web:ec03419a71959432442a82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signUpreq = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("sukses REGISTER ", userCredential.user);
  } catch (err) {
    console.log("error messagesss", err.code, err.message);
  }
};

const signOutReq = async () => {
  try {
    await signOut(auth);
    console.log("berhasil log out");
  } catch (err) {
    console.log(err);
    console.log("gagal log out");
    return err;
  }
};
const signInReq = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    alert("oke berhasil");

    return userCredential.user;
    console.log("User yang berhasil login adalah", userCredential.user);
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
    alert("LOGIN GAGAL");
    return err;
  }
};
export const baseUrlForMovie = "https://image.tmdb.org/t/p";
export { auth, signUpreq, signOutReq, signInReq };
