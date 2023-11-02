import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function AdminGuard({children}) {
    
    const {signed, loading} = useContext(AuthContext);
    const navigate = useNavigate();

    return !loading ?
    (signed ? ( <Navigate to={"/auth/login"}/> ) : ( user.email === 'admin@admin.com' ? children : navigate("/home/estudante"))) : undefined;
}

export default AdminGuard;