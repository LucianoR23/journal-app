import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { useCheckAuth } from "../hooks/useCheckAuth"


export const AppRouter = () => {
    
    const status = useCheckAuth()

    if( status === 'checking' ){
        return <CheckingAuth />
    }

    return (
        <RouterProvider router={ router } />
    )
}
