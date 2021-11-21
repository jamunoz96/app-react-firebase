import { ref, uploadBytes } from "@firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { Product } from "src/types/Product";
import db from "../Firebase/database";
import { storage } from "../Firebase/storage";

export const firebaseSaveProduct = (product : Product) => {
    return addDoc(collection(db, "products"), product);
}

export const firebaseGetProducts = () => {
    return getDocs(collection(db, "products"));
}

export const firebaseUploadImagesProduct = async (id: string, files: any[]) => {
    return new Promise((resolve, reject) => {
        let uploads = 0;
        files.forEach((image: any) => {
            const imagesRef = ref(storage, `images/products/${id}/${image.name}`);
            uploadBytes(imagesRef, image.file).then((snapshot) => {
                uploads++;
                if(uploads===files.length) resolve(true)
            });
        })
    })
}