import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EstudanteRoutes from "./EstudanteRoutes";
import OpenRoutes from "./OpenRoutes";
import AdminRoutes from "./AdminRoutes";

function Routes() {
    
    const router = createBrowserRouter([...EstudanteRoutes, ...OpenRoutes, ...AdminRoutes]);

    return (<RouterProvider router={router} />)
}

export default Routes;