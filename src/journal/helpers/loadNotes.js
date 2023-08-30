import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"


export const loadNotes = async( uid = '' ) => {
    if ( !uid ) throw new Error("The UID doesn't match with any user")

    const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes` )
    const docs = await getDocs( collectionRef )

    const notes = []
    docs.forEach( doc => {
        notes.push({ id: doc.id, ...doc.data() })
    })

    return notes
}