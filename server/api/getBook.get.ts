import { doc, getDoc } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";

export default defineEventHandler(async (event) => {
 const query = getQuery(event);
 const docRef = doc(db, "books", query.bookID);
 const docSnap = await getDoc(docRef);
 if (docSnap.exists()) {
  return {
   book: docSnap.data(),
  };
 }
 return {
  book: false,
 };
});
