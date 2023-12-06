import { collection, addDoc } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";

export default defineEventHandler(async (event) => {
 const body = await readBody(event);
 const docRef = await addDoc(collection(db, "books"), {
  title: body.inTitle,
 });
 return "good";
});
