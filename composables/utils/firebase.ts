// import { initializeApp, cert } from "firebase-admin/app";
// import { getFirestore } from "firebase-admin/firestore";
//
// export const app = initializeApp({
//  credential: cert("./serviceAccount.json"),
// });
//
// export const firestore = getFirestore();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = useRuntimeConfig();

const firebaseConfig = {
 apiKey: config.public.apiKey,
 authDomain: config.public.authDomain,
 projectId: config.public.projectId,
 storageBucket: config.public.storageBucket,
 messagingSenderId: config.public.messagingSenderId,
 appId: config.public.appId,
};
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
