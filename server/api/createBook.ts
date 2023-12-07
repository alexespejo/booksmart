import { collection, addDoc } from "firebase/firestore";
import { db } from "../../composables/utils/firebase";
function generateUniqueId(name: string) {
 // Convert the name to uppercase
 const uppercaseName = name.toUpperCase();

 // Generate a random 4-digit number
 const randomNumbers = Math.floor(1000 + Math.random() * 9000);

 // Combine the uppercase name with the random numbers
 const uniqueId = uppercaseName + randomNumbers;

 return uniqueId;
}

export default defineEventHandler(async (event) => {
 const body = await readBody(event);
 const docRef = await addDoc(collection(db, "books"), {
  title: body.inTitle ? body.inTitle : "",
  condition: body.inCondition ? body.inCondition : "",
  pubDate: body.inPubDate ? body.inPubDate : "",
  edition: body.inEdition ? body.inEdition : "",
  publisher: body.inPublisher ? body.inPublisher : "n/a",
  sold: body.inSold !== undefined ? body.inSold : false,
  srp: body.inSrp ? body.inSrp : "",
  cost: body.inCost ? body.inCost : "",
  author: body.inAuthor ? body.inAuthor : "",
  description: body.inDescription ? body.inDescription : "",
 });
 return "good";
});
