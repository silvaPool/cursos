import { createContext } from "react";

export const AuthContext = createContext({});

export const Auth = ({ children }) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
}

