import { createContext, useState } from "react";
import { auth } from "../services/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext({});
const authRef = auth;




export const Auth = ({ children }) => {
    
    
    const [user, setUser] = useState(null);

    async function  register(email, password) {

        try {
            const resp = await createUserWithEmailAndPassword(authRef, email, password);
            return resp;
        } catch (error) {

            return error.message;
            
        }
            

    }


    return (
        <AuthContext.Provider value={{signed: true, register}}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;

