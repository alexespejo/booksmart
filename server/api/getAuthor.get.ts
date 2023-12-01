import { doc, getDoc } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";

/**
@instructions Create a function that fetches ALL authors from the authors collection and returns them in the form of a JavaScript array

@author
@description An API that gets all authors in the authors collection
 */
export default defineEventHandler(async (event) => {
 const query = getQuery(event);
 const docRef = doc(db, "authors", query.authorID);
 const docSnap = await getDoc(docRef);
 console.log(docSnap.data());
 return {
  author: docSnap.data(),
 };
});
