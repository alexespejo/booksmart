import { db } from "../../composables/utils/firebase";
import { doc, getDoc } from "firebase/firestore";

export default defineEventHandler(async (event) => {
 const ref = doc(db, `company-data`, "employees");
 const docSnap = await getDoc(ref);
 const snapshot = await docSnap.data();
 if (docSnap.exists()) {
  return snapshot;
 }
 return snapshot;
});
