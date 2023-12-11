import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";

export default defineEventHandler(async (event) => {
 //  const body = await readBody(event);
 const bookRef = doc(db, "books", "JANG9625");
 await updateDoc(bookRef, {
  title: "hello world",
  //   title: body.title !== "" ? body.title : "",
  //   condition: body.condition ? parseInt(body.condition) / 25 : 0,
  //   pubDate: body.pubDate !== "" ? body.pubDate : "",
  //   edition: body.edition !== "" ? body.edition : "",
  //   publisher: body.publisher !== "" ? body.publisher : "n/a",
  //   sold: false,
  //   srp: body.srp !== "" ? body.srp : "",
  //   cost: body.cost !== "" ? body.cost : 0,
  //   author: body.author !== "" ? body.author : "",
  //   description: body.description !== "" ? body.description : "",
 });
 return "hello";
});
