import { db } from "../../composables/utils/firebase";
import { doc, getDoc } from "firebase/firestore";

export default defineEventHandler(async (event) => {
 const ref = doc(db, `books`, "NkRfDCuKjYtBMi4p55TI");

 const docSnap = await getDoc(ref);
 const snapshot = await docSnap.data();

 if (docSnap.exists()) {
  return snapshot;
 }
 return "error";
});
