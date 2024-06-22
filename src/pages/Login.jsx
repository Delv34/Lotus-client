import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as OpenEye} from "../images/OpenEye.svg"
import Modal from "./Modal";

const Login = ()=> {

        const [modalActive, setModalActive] = useState (false);
    return (
        <>
        <div className="background flex items-center justify-center white-block px-[40px] min-w-[980px]">
        <div className="flex flex-col items-center">
            <div className="font-I-Bold text-[30px] mb-[40px]">Вход</div>
            <div className="flex flex-col gap-[32px] mb-[69px]">
                <input type="email" placeholder="E-mail" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[10px] px-[30px] w-[502px] font-I-Reg text-[14px] focus:outline-0 placeholder:text-[#1D27A4]"/>
                <div className="flex border-[3px] border-[#8D96FF] rounded-[30px]"><input type="password" className="rounded-[30px] py-[10px] pl-[30px] pr-[5px] w-[459px] font-I-Reg text-[14px] focus:outline-0"/><button className=" rounded-[30px] py-[13px] pr-[15px]"><OpenEye/></button></div>
            </div>
            <div className="flex justify-between w-[480px] mb-[15px]">
                <div>
                   <label className="font-I-Reg text-[16px] checkbox">
                    Запомнить вход
                    <input type="checkbox"/>
                    <span></span>
                    </label> 
                </div>
                
            <div className="font-I-Reg text-[14px] cursor-pointer hover:text-[#3A49FF]" onClick={()=> setModalActive(true)}>Забыли пароль?</div>
            </div>
            <Link to="/"><button type="submit" className="button rounded-[30px] px-[217px] w-[502px] py-[13px] mb-[45px]">Войти</button></Link>
            <Link to="/registration" className="font-I-Reg text-[20px] hover:text-[#3A49FF]">Регистрация</Link>
        </div>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
            <div className="flex flex-col items-center">
                <div className="font-I-Bold text-[30px] mb-[40px]">Восстановление пароля</div>
                <input type="email" placeholder="E-mail" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[10px] px-[30px] w-[502px] font-I-Reg text-[14px] mb-[30px] focus:outline-0 placeholder:text-[#1D27A4]"/>
                <button type="submit" onClick={()=> setModalActive(false)} className="button rounded-[30px] flex items-center justify-center w-[502px] py-[13px]">Отправить</button>
            </div>
            
        </Modal>
        </>
    )
}

export default Login;