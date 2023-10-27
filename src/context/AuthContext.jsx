import { createContext } from "react";
import { auth } from "../services/FirebaseConfig";

export const AuthContext = createContext({});

const authRef = auth;



export const Auth = ({ children }) => {

    

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
}

