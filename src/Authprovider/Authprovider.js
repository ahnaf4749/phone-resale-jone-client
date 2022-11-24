import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../firebase/Firebase.init';



const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {

    const authInfo = {

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;