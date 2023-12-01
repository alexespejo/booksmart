import { collection, getDocs } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";

/**
@instructions Create a function that fetches ALL books from the books collection and returns them in the form of a JavaScript array

@author
@description An API that gets all books in the book collection
 */
interface BookData {
 pubDate: number;
 edition: number;
 srp: number;
 sold: boolean;
 publisher: string;
 author: string;
 cost: number;
 title: string;
 condition: number;
}

export default defineEventHandler(async (event) => {
 const querySnapshot = await getDocs(collection(db, "books"));
 const books_data: any = querySnapshot.docs.map((x) => x.data());
 return {
  books: books_data,
 };
});
