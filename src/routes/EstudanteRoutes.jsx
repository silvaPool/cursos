import AuthGuard from '../utils/AuthGuard';
import LayoutInterior from '../pages/estudante/LayoutInterior';

const EstudanteRoutes = [

    {
        path: "/home/estudante",
        element: (
            <AuthGuard>
                <LayoutInterior />
            </AuthGuard>
        ),
        // children: [

        // ]
    },

];

export default EstudanteRoutes;