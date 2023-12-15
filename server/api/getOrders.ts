import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";

/**
@instructions Create a function that fetches ALL employees from the employees collection and returns them in the form of a JavaScript array

@author
@description An API that gets all employees in the employee collection
 */
export default defineEventHandler(async (event) => {
 const orderQuery: any = getQuery(event);
 const orderCollection = collection(db, "orders");
 let orderQue: any = orderCollection;
 if (orderQuery.query === "onlyShipped") {
  orderQue = query(orderCollection, where("status", "==", "Shipped"));
 } else if (orderQuery.query === "pickedUp") {
  orderQue = query(orderCollection, where("status", "==", "Picked up"));
 } else if (orderQuery.query === "sortByPrice") {
 }
 const querySnapshot = await getDocs(orderQue);
 const order_data: any = querySnapshot.docs.map((x) => x.data());
 return {
  orders: order_data,
 };
});
