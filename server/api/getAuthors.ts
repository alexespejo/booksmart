import { collection, getDocs } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";

/**
@instructions Create a function that fetches ALL authors from the authors collection and returns them in the form of a JavaScript array

@author
@description An API that gets all authors in the authors collection
 */
export default defineEventHandler(async (event) => {
 const querySnapshot = await getDocs(collection(db, "authors"));
 const authors_data: any = querySnapshot.docs.map((x) => x.data());

 return {
  authors: authors_data,
 };
});
