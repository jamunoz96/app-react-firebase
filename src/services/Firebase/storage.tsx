import { getStorage } from "firebase/storage";
import app from ".";

export const storage = getStorage(app);