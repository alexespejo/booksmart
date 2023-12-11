import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";

export default defineEventHandler(async (event) => {
 const body = await readBody(event);
 const bookRef = doc(db, "books", body.bookID);
 if (body.title) {
  await updateDoc(bookRef, {
   title: body.title,
  });
 }
 if (body.cost) {
  await updateDoc(bookRef, {
   cost: body.cost,
  });
 }
 if (body.description) {
  await updateDoc(bookRef, {
   description: body.description,
  });
 }
 if (body.author) {
  await updateDoc(bookRef, {
   author: body.author,
  });
 }
 return 200;
});
// description: body.description,
//   condition: body.condition ? parseInt(body.condition) / 25 : 0,
//   pubDate: body.pubDate,
//   edition: body.edition,
//   publisher: body.publisher,
//   sold: false,
//   srp: body.srp,
//   author: body.author,
