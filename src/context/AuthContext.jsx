import { createContext, useState } from "react";
import { auth } from "../services/FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext({});
const authRef = auth;




export const Auth = ({ children }) => {
    
    
    const [user, setUser] = useState(null);


    async function login(email, senha) {
        try {
            const resp = await signInWithEmailAndPassword(authRef, email, senha);
            
            setUser(resp.user);

            return true;
        } catch (error) {
            return error.message;
        }
    }

    async function  register(email, password) {

        try {
            const resp = await createUserWithEmailAndPassword(authRef, email, password);
            return resp;
        } catch (error) {

            return error.message;
            
        }
            

    }


    return (
        <AuthContext.Provider value={{login, register}}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;

