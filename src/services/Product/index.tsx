import { ref, uploadBytes, listAll, getDownloadURL, StorageReference } from "@firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Product } from "src/types/Product";
import db from "../Firebase/database";
import { storage } from "../Firebase/storage";

export const firebaseSaveProduct = (product: Product) => {
    return addDoc(collection(db, "products"), product);
}

export const firebaseGetProducts = () => {
    return getDocs(collection(db, "products"));
}

export const firebaseUploadImagesProduct = (id: string, files: any[]): Promise<boolean> => {
    return new Promise((resolve) => {
        let uploads = 0;
        files.forEach((image: any) => {
            const imagesRef = ref(storage, `images/products/${id}/${image.name}`);
            uploadBytes(imagesRef, image.file).then(() => {
                uploads++;
                if (uploads === files.length) resolve(true)
            });
        })
    })
}

export const firebaseGetImagesProduct = (products: Product[]): Promise<Product[]> => {
    return new Promise((resolve) => {
        let downloads = 0;
        products.forEach((product: Product) => {
            const imagesRef = ref(storage, `images/products/${product.id}`);
            listAll(imagesRef)
                .then((res) => {
                    res.items.forEach((itemRef: StorageReference, index: number) => {
                        getDownloadURL(itemRef)
                            .then((url) => {
                                product.images?.push(url)
                                if(res.items.length == index+1) downloads++;
                                if (downloads === products.length) resolve(products)
                            })
                        });
                });
        })
    })
}