import AuthGuard from '../utils/AuthGuard';
import LayoutInterior from '../pages/estudante/LayoutInterior';
import EditarPerfil from '../pages/estudante/EditarPerfil';

const EstudanteRoutes = [

    {
        path: "/home/estudante",
        element: (
            <AuthGuard>
                <LayoutInterior />
            </AuthGuard>
        ),
        children: [
            {
                path: "edit-profile",
                element: <EditarPerfil />
            },
        ]
    },

];

export default EstudanteRoutes;