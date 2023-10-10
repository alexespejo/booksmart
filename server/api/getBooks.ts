import { db } from "../../composables/utils/firebase";

/**
@instructions Create a function that fetches ALL books from the books collection and returns them in the form of a JavaScript array

@author
@description An API that gets all books in the book collection
 */
export default defineEventHandler(async (event) => {
 const books_data: any = [];

 return {
  books: books_data,
 };
});
