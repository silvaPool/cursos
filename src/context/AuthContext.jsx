import { createContext, useEffect, useState } from "react";
import { auth } from "../services/FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { jwtDecode } from "jwt-decode";

function toTimeStamp(strDate) {
    var datum = Date.parse(strDate);
    return datum/1000;
}

export const AuthContext = createContext({});
const authRef = auth;




export const Auth = ({ children }) => {
    
    
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storagedUser = window.localStorage.getItem('@App:user');
        const token = window.localStorage.getItem('@App:token');

        if (token) {
            var decode = jwtDecode(token);
            var newDate = new Date();
            const timeStamp = toTimeStamp(newDate);
            if (timeStamp > decode.exp) {
                console.log("maior");
                setLoading(false);
            } else {
                if (storagedUser) {
                    setUser(JSON.parse(storagedUser));
                    setLoading(false);
                } else {
                    setUser(null);
                    setLoading(false);
                }
            }
        }
        setLoading(false);
    }, []);


    async function login(email, password) {
        try {
            const resp = await signInWithEmailAndPassword(authRef, email, password);
            
            setUser(resp.user);

            localStorage.setItem("@AccessToken", resp.user.accessToken);
            localStorage.setItem("@User", JSON.stringify(resp.user));

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
        <AuthContext.Provider value={{ login, register}}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;

