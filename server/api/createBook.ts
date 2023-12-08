import { doc, setDoc } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";

export default defineEventHandler(async (event) => {
 const body = await readBody(event);
 const docRef = await setDoc(doc(db, "books", body.book_id), {
  title: body.inTitle ? body.inTitle : "",
  condition: body.inCondition ? parseInt(body.inCondition) / 25 : 0,
  pubDate: body.inPubDate ? body.inPubDate : "",
  edition: body.inEdition ? body.inEdition : "",
  publisher: body.inPublisher ? body.inPublisher : "n/a",
  sold: false,
  srp: body.inSrp ? body.inSrp : "",
  cost: body.inCost ? body.inCost : 0,
  author: body.inAuthor ? body.inAuthor : "",
  description: body.inDescription ? body.inDescription : "",
 });
 return "good";
});
