import { getFirestore } from "firebase/firestore"
import app from ".";

const db = getFirestore(app);

export default db;