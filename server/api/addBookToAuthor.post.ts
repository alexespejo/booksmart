import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";

export default defineEventHandler(async (event) => {
 const body = await readBody(event);
 const docRef = doc(db, "authors", body.authorID);
 await updateDoc(docRef, {
  books: arrayUnion(body.bookID),
 });
 return "good";
});
