import { Navigate, Outlet } from "react-router-dom"
import { useCheckAuth } from "../../hooks/useCheckAuth"


export const JournalRoutes = () => {

    const status = useCheckAuth()

    if( status === 'notAuthenticated' ){
        return <Navigate to='/auth/*' />
    }

    return (
        <Outlet />
    )
}
