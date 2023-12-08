/*
{
  Description: "",
  FirstName: "",
  LastName: "",
  YearBorn: null,
  YearDied: null,
  books: [
    ""
  ]
}
*/
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";

export default defineEventHandler(async (event) => {
 const body = await readBody(event);
 const docRef = await addDoc(collection(db, "employees"), {
  Address1: body.Address1 ? body.Address1 : "",
  Address2: body.Address2 ? body.Address2 : "",
  City: body.City ? body.City : "",
  DOB: body.DOB ? body.DOB : "",
  FirstName: body.FirstName ? body.FirstName : "",
  HireDate: body.HireDate ? body.HireDate : "",
  LastName: body.LastName ? body.LastName : "",
  Phone: body.Phone ? body.Phone : "",
  Position: body.Position ? body.Position : "",
  State: body.State ? body.State : "",
  Zip: body.Zip ? body.Zip : "",
 });

 return "good";
});
