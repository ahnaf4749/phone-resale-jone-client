import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/Firebase.init';



export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {

    const [user, setUser] = useState(null)


    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, curreantUser => {
            setUser(curreantUser)
        })
        return () => {
            return unSubscribe();
        }
    }, [])

    const authInfo = {
        creatUser,
        updateUser,
        login,
        googleLogin,
        logOut,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;