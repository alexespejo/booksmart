import { collection, getDocs } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";

/**
@instructions Create a function that fetches ALL employees from the employees collection and returns them in the form of a JavaScript array

@author
@description An API that gets all employees in the employee collection
 */
export default defineEventHandler(async (event) => {
 const querySnapshot = await getDocs(collection(db, "customers"));
 const customer_data: any = querySnapshot.docs.map((x) => x.data());

 return {
  employees: customer_data,
 };
});
