import { Navigate } from "react-router-dom";
import { JournalPage } from "../pages/JournalPage";


export const routesJournal = [
    {
        path: "/",
        element: <JournalPage />,
    },
    // {
    //     path: "/*",
    //     element: <Navigate to="/" />,
    // },
]