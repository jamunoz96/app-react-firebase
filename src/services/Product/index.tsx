import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { Product } from "src/types/Product";
import db from "../Firebase/database";

export const firebaseSaveProduct = (product : Product) => {
    return addDoc(collection(db, "products"), product);
}

export const firebaseGetProducts = () => {
    return getDocs(collection(db, "products"));
}