import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import app from "./firebase";

const auth = getAuth(app);

export function signUpWithEmail(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed Up
    return userCredential.user;
    
  })
  .catch((error: FirebaseError) => {
    console.error('error Code:%s Error:%s', error.code, error.message);
  })
}

export function signInWithEmail(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password)
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
