import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
} from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function createUser(
  uid: string,
  firstName: string,
  lastName: string
) {
  // Build Collection
  const usersCollection = collection(db, "users");
  const userDocumentData = {
    uid,
    firstName,
    lastName,
  };

  try {
    // Check if user exists
    const userDocRef = doc(usersCollection, uid);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      // Create User
      await setDoc(userDocRef, userDocumentData);
      console.log("Created Firestore User")
    }
  } catch (error) {
    console.error(error)
    // console.error(
    //   "error Code:%s Error:%s",
    //   (error as FirestoreError).code,
    //   (error as FirestoreError).message
    // );
  }
}
