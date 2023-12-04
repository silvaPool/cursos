import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./FirebaseConfig";
import { updateProfile } from "firebase/auth";

export async function setPhoto(file, uid) {
    
    try {
        const storageRef = ref(storage, uid);

        const snapshot = await uploadBytes(storageRef, file);

        const urlDownloadData = await getDownloadURL(storageRef, snapshot);
        console.log(urlDownloadData);
        await updateProfile({urlImage:urlDownloadData}, uid);

        return urlDownloadData;

    } catch (error) {
        return error;
    }
}