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
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";

export default defineEventHandler(async (event) => {
 const body = await readBody(event);
 const docRef = await setDoc(doc(db, "authors", body.authorID), {
  Description: body.description ? body.description : "",
  FirstName: body.firstName ? body.firstName : "",
  LastName: body.lastName ? body.lastName : "",
  YearBorn: body.yearBorn ? body.yearBorn : null,
  YearDied: body.yearDied ? body.yearDied : null,
  books: body.books ? body.books : [],
 });

 return "good";
});
