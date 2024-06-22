import React from "react";
import { ReactComponent as OpenEye} from "../images/OpenEye.svg"
import { ReactComponent as ClosedEye} from "../images/ClosedEye.svg"
import { Link } from "react-router-dom";

const Registration = ()=> {
    return (
        <>
        <div className="background flex items-center justify-center white-block min-w-[980px] px-[40px]">
        <div className="flex flex-col items-center">
            <div className="font-I-Bold text-[30px] mb-[40px]">Регистрация</div>
            <div className="flex flex-col gap-[32px] mb-[45px]">
                <input type="email" placeholder="E-mail" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[10px] px-[30px] w-[502px] font-I-Reg text-[14px] focus:outline-0 placeholder:text-[#1D27A4]"/>
                <div className="flex border-[3px] border-[#8D96FF] rounded-[30px]"><input type="password" className="rounded-[30px] py-[10px] pl-[30px] pr-[5px] w-[459px] font-I-Reg text-[14px] focus:outline-0"/><button className=" rounded-[30px] py-[13px] pr-[15px]"><OpenEye/></button></div>
                <div className="flex border-[3px] border-[#8D96FF] rounded-[30px]"><input type="password" className="rounded-[30px] py-[10px] pl-[30px] pr-[5px] w-[459px] font-I-Reg text-[14px] focus:outline-0"/><button className=" rounded-[30px] py-[13px] pr-[15px]"><OpenEye/></button></div>
                <Link to="/registration2"><button type="submit" className="button rounded-[30px] flex items-center justify-center w-[502px] py-[10px]">Регистрация</button></Link>
            </div>
            <Link to="/login" className="font-I-Reg text-[20px] hover:text-[#3A49FF]">Я уже зарегистрирован</Link>
        </div>
        </div>
        </>
    )
}

export default Registration;