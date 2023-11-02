import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function AuthGuard({ children }) {

    const { signed, loading, user } = useContext(AuthContext);
  


    return !loading ? (
        !signed ? (
            <Navigate to={"/auth/login"} />
        ) : user.email === 'admin@admin.com' ? (
            <Navigate to={"/admin/home"} />
        ) : (
            children
        )
    ) : undefined;
}

export default AuthGuard;