import { addDoc, collection } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";

export default defineEventHandler(async (event) => {
 const body = await readBody(event);
 const docRef = await addDoc(collection(db, "orders"), {
  amount: "1200",
  bookIds: "",
  customer: "Janet Leverling",
  status: "Customer will pick up",
  salesperson: "Alexander Espejo",
  payment: "Cash",
  orderDate: "23-14-12",
 });

 return "good";
});
