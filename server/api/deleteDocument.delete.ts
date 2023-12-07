import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";
export default defineEventHandler(async (event) => {
 const body = await readBody(event);
 await deleteDoc(doc(db, body.docType, body.empID));
 console.log(body.empID);
 return {
  msg: body.empID,
 };
});
