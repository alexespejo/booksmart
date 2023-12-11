import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";

/**
@instructions Create a function that fetches ALL books from the books collection and returns them in the form of a JavaScript array

@author
@description An API that gets all books in the book collection
 */

export default defineEventHandler(async (event) => {
 const reqQuery: any = getQuery(event);
 const bookCollection = collection(db, "books");
 let bookQuery: any = bookCollection;
 if (reqQuery.req === "showSold") {
  bookQuery = query(bookCollection, where("sold", "==", true));
 } else if (reqQuery.req === "showStock") {
  bookQuery = query(bookCollection, where("sold", "==", false));
 } else if (reqQuery.req === "ascCondition") {
  bookQuery = query(bookCollection, orderBy("condition", "desc"));
 }
 //  else if (reqQuery.req === "titleAlphaDesc") {
 //   bookQuery = query(bookCollection, orderBy("title", "desc"));
 //  } else if (reqQuery.req === "costAsc") {
 //   bookQuery = query(bookCollection, orderBy("cost", "asc"));
 //  } else if (reqQuery.req === "costDesc") {
 //   bookQuery = query(bookCollection, orderBy("cost", "desc"));
 //  } else if (reqQuery.req === "bookStock") {
 //   bookQuery = query(bookCollection, where("sold", "==", false));
 //  }
 //  if (reqQuery !== null) {
 const querySnapshot = await getDocs(bookQuery);

 const books_data: any = querySnapshot.docs.map((x) => {
  const obj = { key: x.id, content: x.data() };
  return obj;
 });
 return {
  books: books_data,
 };
});
