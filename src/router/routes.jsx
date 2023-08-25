import React from 'react'
import { Navigate, createBrowserRouter, createHashRouter } from "react-router-dom";
import { ErrorPage } from "../ui/pages/ErrorPage";
import { AuthRoutes, routesAuth } from "../auth/routes";
import { JournalRoutes, routesJournal } from "../journal/routes";


export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <JournalRoutes />,
        children: routesJournal
    },
    {
        path: "/auth/*",
        errorElement: <ErrorPage />,
        element: <AuthRoutes />,
        children: routesAuth
    },
    {
        path: '/*',
        element: <Navigate to="/" />
    }
])