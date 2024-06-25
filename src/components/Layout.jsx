import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Layout = ()=> {
    return(
        <>
        <Menu/>
        <div className="background bg-gradient-to-b from-[#535DD4] via-[#9BA5E9] to-[#E1E5FF] pt-[40px] pb-[80px] flex items-center justify-center w-screen h-full">
        <Outlet/>
        </div>
        <Footer/>
        </>
    )
}

export default Layout;