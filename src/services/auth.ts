import { getAuth, createUserWithEmailAndPassword, User, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebase";
import { FirebaseError } from "firebase/app";

const auth = getAuth(app);

export function signUpWithEmail(email: string, password: string): User | void {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed Up
    return userCredential.user;
  })
  .catch((error: FirebaseError) => {
    console.error('error Code:%s Error:%s', error.code, error.message);
  })
}

export function signInWithEmail(email: string, password: string): User | void {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    return userCredential.user
  })
  .catch((error: FirebaseError) => {
    console.error('error Code:%s Error:%s', error.code, error.message);
  })
}

export function logout(): void {
  signOut(auth).then(() => {

  })
  .catch((error: FirebaseError) => {
    console.error('error Code:%s Error:%s', error.code, error.message);
  })
}
