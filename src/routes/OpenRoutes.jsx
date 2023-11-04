import LandingPage from '../components/LandingPage'
import Login from '../pages/autenticacao/Login';
import Cadastro from '../pages/autenticacao/cadastro';
import MainGuard from '../utils/MainGuard';

const OpenRoutes = [

    {
        path: "/",
        element:
            (
                <MainGuard>
                    <LandingPage />
                </MainGuard>

            ),

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