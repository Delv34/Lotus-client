import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../store"

const AdminRoute = () => {
    const checkAdmin = useAuthStore((state)=> state.checkAdmin)
    checkAdmin(localStorage.getItem("role"))
    const isAdmin = useAuthStore((state)=> state.isAdmin)
    return (
        isAdmin ? <Outlet/> : <Navigate to="/"/>
    )
}

export default AdminRoute;