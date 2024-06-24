import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../store"


const PrivateRoute = () => {
    const addToken = useAuthStore((state)=> state.addToken)
    addToken(localStorage.getItem("token"))
    const auth = useAuthStore((state)=> state.token)
    return (
        auth ? <Outlet/> : <Navigate to="login"/>
    )
}

export default PrivateRoute;