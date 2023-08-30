import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const signInWithGoogle = async() => {

    try {
        
        const result = await signInWithPopup( FirebaseAuth, googleProvider )
        // const credential = GoogleAuthProvider.credentialFromResult( result )
        const user = result.user
        
        const { displayName, email, photoURL, uid } = user

        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorMessage
        }
    }

}
export const signInWithGithub = async() => {

    try {
        
        const result = await signInWithPopup( FirebaseAuth, githubProvider )
        // const credential = GithubAuthProvider.credentialFromResult( result )
        const user = result.user
        
        const { displayName, email, photoURL, uid } = user

        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorMessage
        }
    }

}


export const registerUser = async({ email, password, displayName }) => {

    try {
        
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password )
        const { uid, photoURL } = resp.user
        //TODO actualizar displayname
        await updateProfile( FirebaseAuth.currentUser, { displayName } )

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }

}

export const loginUser = async({ email, password }) => {

    //! signInWithEmailAndPassword
    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password )
        const { uid, displayName, photoURL } = resp.user

        return {
            ok: true,
            uid, photoURL, displayName
        }



    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }

}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut()
}