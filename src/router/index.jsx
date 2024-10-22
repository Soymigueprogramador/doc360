import { createBrowserRouter } from "react-router-dom";
//import { Home, ErrorPage, Register, ClinicHistory, ClinicHistoryWider } from '../pages';
import { Home } from '../pages/Home/Home';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { Register } from '../pages/Register/Register';
import { ClinicHistory } from '../pages/clinicHistory/ClinicHistory';
import { ClinicHistoryWider } from '../pages/clinicHostoryWider/ClinicHisotoryWider';

import { MainGuard } from "./mainGuard";

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/error404",
        element: (
            <ErrorPage
                label={
                    "Esta dirección ha sido escrita de manera \n errónea o la página se ha eliminado."
                }
                error={404}
            />
        ),
    },
    {
        path: "/error500",
        element: <ErrorPage label="Servidor no encontrado." error={500} />,
    },
    { path: "/register", element: <Register /> },
    {
        path: "/clinicHistory",
        element: (
            <MainGuard>
                <ClinicHistory />
            </MainGuard>
        ),
    },
    { path: "/clinicHistoryWider", element: <ClinicHistoryWider /> }
    
]); 