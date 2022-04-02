import { async } from "@firebase/util";
import { collection, doc, setDoc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { db } from "../config";

// Add a new document in collection "cities"

export function addUser(userData) {
    return new Promise(async (resolve, reject) => {
        const userPath = doc(collection(db, "users"));
        await setDoc(userPath, { ...userData, id: userPath.id }).then(() => resolve(true)).catch(() => reject(false))
    })

}

export function updateUser(userData) {
    return new Promise(async (resolve, reject) => {
        const userPath = doc(db, "users", userData?.id);;
        await updateDoc(userPath, userData).then(() => resolve(true)).catch(() => reject(false))
    })
}
export function deleteUser(userDocId) {
    return new Promise(async (resolve, reject) => {
        const userPath = doc(db, "users", userDocId);
        await deleteDoc(userPath).then(() => resolve(true)).catch(() => reject(false))
    })
}


