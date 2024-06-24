// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries   
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbq8pqm7OxPTL6B0ZIzfe3A-wSd4U2sf4",
    authDomain: "ecommerce-57755-b2960.firebaseapp.com",
    projectId: "ecommerce-57755-b2960",
    storageBucket: "ecommerce-57755-b2960.appspot.com",
    messagingSenderId: "243332687391",
    appId: "1:243332687391:web:cc175ca45ef138299f972a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getProducts(){
    const response = await getDocs(collection(db, 'products'));
    const listaProds=[];
    response.forEach((document) => listaProds.push({id: document.id, ...document.data()}))
    return listaProds;
}