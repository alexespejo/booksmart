import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";

export default defineEventHandler(async (event) => {
 const body = await readBody(event);
 const bookRef = doc(db, "books", body.bookID);
 await updateDoc(bookRef, {
  title: body.title,
  //   condition: body.condition ? parseInt(body.condition) / 25 : 0,
  //   pubDate: body.pubDate,
  //   edition: body.edition,
  //   publisher: body.publisher,
  //   sold: false,
  //   srp: body.srp,
  //   cost: body.cost,
  author: body.author,
  description: body.description,
 });
 return 200;
});
