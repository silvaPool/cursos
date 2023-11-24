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

     let faceio;

  useEffect(() => {
    faceio = new faceIO("fioaca58");
  })

  const handleSignIn = async () => {
   try {
      let response = await faceio.enroll({
          locale: "auto",
          payload: {
            email: "example@gmail.com",
            pin: "12345",
          }
      });

      console.log(`Unique Facial ID: ${response.facialId}
      Enrollment Date = ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
     
   } catch (error) {
      console.log(error);
    
   }
  };

  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(`Unique Facial ID: ${response.facialId}
        PayLoad: ${response.payload}
        `)
    } catch (error) {
      console.log(error);
    }
  }

    useEffect(() => {
        const storagedUser = window.localStorage.getItem('@App:user');
        const token = window.localStorage.getItem('@App:token');

        if (token) {
            var decode = jwtDecode(token);
            var newDate = new Date();
            const timeStamp = toTimeStamp(newDate);
            if (timeStamp > decode.exp) {
                console.log("maior");
                logout();
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

            localStorage.setItem("@App:token", resp.user.accessToken);
            localStorage.setItem("@App:user", JSON.stringify(resp.user));

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

    function logout() {
        localStorage.removeItem('@App:token');
        localStorage.removeItem('@App:user');

        setUser(null);
    }


    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, login, register, logout, handleSignIn, handleLogIn}}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;

