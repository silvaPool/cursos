import LandingPage from '../components/LandingPage'
import Login from '../pages/autenticacao/Login';
import Cadastro from '../pages/autenticacao/cadastro';

const OpenRoutes = [

    {
        path: "/",
        element: <LandingPage />,
        children: [
            {
                path: "/auth/login",
                element: <Login />
            },
            {
                path: "/auth/cadastro",
                element: <Cadastro />
            },
        ]
    }

];

export default OpenRoutes;