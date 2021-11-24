import { ref, uploadBytes, listAll, getDownloadURL, StorageReference } from "@firebase/storage";
import { collection, addDoc, getDocs, query, where, QuerySnapshot, QueryDocumentSnapshot } from "firebase/firestore";
import { Product } from "src/types/Product";
import db from "../Firebase/database";
import { storage } from "../Firebase/storage";

export const firebaseSaveProduct = (product: Product) => {
    return addDoc(collection(db, "products"), product);
}

export const firebaseDeleteProduct = (product: Product) => {
    return addDoc(collection(db, "products"), product);
}

export const firebaseGetProduct = (product: Product) => {
    return addDoc(collection(db, "products"), product);
}

export const firebaseGetProducts = (id: string): Promise<Product[]> => {
    const q = query(collection(db, "products"), where("user_id", "==", id));
    let products: Product[] = []
    return new Promise((resolve, reject) => {
        getDocs(q)
            .then((result: QuerySnapshot<any>) => {
                result.forEach((doc: QueryDocumentSnapshot<Product>) => {
                    let product = doc.data()
                    product.id = doc.id;
                    product.images = [];
                    products.push(product)
                });
                resolve(products);
            })
            .catch(err => {
                reject(err)
            });
    })
}

export const firebaseUploadImagesProduct = async (id: string, files: any[]): Promise<boolean> => {
    return await new Promise((resolve) => {
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
    return new Promise((resolve, reject) => {
        let downloads = 0;
        let images = 0;
        products.forEach((product: Product) => {
            const imagesRef = ref(storage, `images/products/${product.id}`);
            listAll(imagesRef)
                .then((res) => {
                    images += res.items.length;
                    res.items.forEach((itemRef: StorageReference, index: number) => {
                        getDownloadURL(itemRef)
                            .then((url) => {
                                downloads++;
                                product.images?.push(url)
                                if (downloads === images) resolve(products)
                            })
                            .catch(err => {
                                reject(err)
                            });
                    });
                });
        })
    })
}