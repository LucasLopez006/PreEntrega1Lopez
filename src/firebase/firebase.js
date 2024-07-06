import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbq8pqm7OxPTL6B0ZIzfe3A-wSd4U2sf4",
  authDomain: "ecommerce-57755-b2960.firebaseapp.com",
  projectId: "ecommerce-57755-b2960",
  storageBucket: "ecommerce-57755-b2960.appspot.com",
  messagingSenderId: "243332687391",
  appId: "1:243332687391:web:cc175ca45ef138299f972a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProduct() {
  const response = await getDocs(collection(db, 'products'));
  const listaProds = [];
  response.forEach((docu) => {
    const data = docu.data();
    console.log("Document data:", data); 
    listaProds.push({ id: docu.id, ...data });
  });
  console.log("Products list:", listaProds); 
  return listaProds;
}

export async function getProductById(productId) {
  const docRef = doc(db, 'products', productId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("No such document!");
  }
}

export async function getProductsByCategory(Category) {
  const q = query(collection(db, 'products'), where('Category', '==', Category));
  const response = await getDocs(q);
  const listaProds = [];
  response.forEach((docu) => {
    const data = docu.data();
    console.log("Document data:", data); 
    listaProds.push({ id: docu.id, ...data });
  });
  console.log("Products list:", listaProds); 
  return listaProds;
}

const searchProducts = async (query) => {
  try {
      const normalizedQuery = query.toLowerCase();

      const productsSnapshot = await getDocs(collection(db, 'products'));

      const results = productsSnapshot.docs
          .map(doc => ({
              id: doc.id,
              ...doc.data()
          }))
          .filter(product => product.Title.toLowerCase().includes(normalizedQuery));  

      return results;
  } catch (error) {
      console.error('Error searching products: ', error);
      return [];
  }
};

export { searchProducts };  

export async function addOrderToFirestore(orderData) {
  try {
      const docRef = await addDoc(collection(db, 'orders'), orderData);
      console.log("Order added with ID: ", docRef.id);
      return docRef.id;  
  } catch (error) {
      console.error("Error adding order: ", error);
      throw new Error("Error adding order to Firestore");
  }
}

export async function getProducts() {
  const response = await getDocs(collection(db, 'products'));
  console.log(response);
  const listaProds = [];
  response.forEach((docu) => listaProds.push({ id: docu.id, ...docu.data() }));
  return listaProds;
}

export async function filterProdsByPrice(maxPrice) {
  const q = query(collection(db, 'products'), where('price', '<', maxPrice));
  const response = await getDocs(q);
  const listaFiltro = [];
  response.forEach((docu) => listaFiltro.push({ id: docu.id, ...docu.data() }));
  return listaFiltro;
}

export async function addOrder(order) {
  const ordersCollection = collection(db, 'orders');
  const docRef = await addDoc(ordersCollection, order);
  console.log('Doc ref generado: ' + docRef);
  console.log('Id generado: ' + docRef.id);
  return docRef.id;
}

export async function updateProduct(id, toUpdate) {
  const productDoc = doc(db, 'products', id);
  try {
    await updateDoc(productDoc, toUpdate);
  } catch (error) {
    console.log('Error ' + error);
  }
}

export async function deleteProduct(id) {
  const productDoc = doc(db, 'products', id);
  try {
    await deleteDoc(productDoc);
  } catch (error) {
    console.log('Error ' + error);
  }
}

export { db };






