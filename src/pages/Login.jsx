import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as OpenEye} from "../images/OpenEye.svg"
import { ReactComponent as ClosedEye} from "../images/ClosedEye.svg"
import Modal from "./Modal";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuthStore } from "../store";

const Login = ()=> {

    const server_url = process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_SERVER_URL2

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm()

    const onSubmit = (data)=> {
        axios.post(`${server_url}/login`, data)
        .then((response)=> {
            setData(response.data)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("role", response.data.role)
            console.log(response.data.role)
            response.data.token ? response.data.role == "ADMIN" ? window.location.href = '/admin-panel' : window.location.href = '/orders' : <></>
            // setToken(response.data.token)
            // console.log(useToken((state)=> state.token))
        })
        .catch((error)=> {
            console.log(error)
        })
    }

        const [modalActive, setModalActive] = useState (false);
        const [password, setPassword] = useState(false)
        const [data, setData] = useState("")

        const addToken = useAuthStore((state)=> state.addToken)
    return (
        <>
        <div className="background flex items-center justify-center white-block px-[40px] min-w-[980px]">
        <div className="flex flex-col items-center">
            <div className="font-I-Bold text-[30px] mb-[16px]">Вход</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-[9px] mb-[69px]">
                        <div className="flex flex-col">
                            <div>{}</div>
                        <div className="font-I-Reg text-[red] ml-[5px] mb-[5px] h-[24px]">{ data ? data.message == "Пользователь не найден" ? data.message : errors?.email && errors?.email?.message : errors?.email && errors?.email?.message }</div>
                        <input {
                                    ...register('email',{
                                        required: "Поле не может быть пустым",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Некорректный email",
                                        },
                                    }
                                    )
                                } type="email" placeholder="E-mail" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[10px] px-[30px] w-[502px] font-I-Reg text-[14px] focus:outline-0 placeholder:text-[#1D27A4]"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-I-Reg text-[red] h-[24px] ml-[5px] mb-[5px]">{data ? data.message == "Введен неверный пароль" ? data.message : errors?.password && errors?.password?.message : errors?.email && errors?.email?.message}</div>
                            <div className="flex border-[3px] border-[#8D96FF] rounded-[30px]"><input {
                                    ...register('password', {
                                        required: "Поле не может быть пустым",
                                        minLength: {
                                            value: 8,
                                            message: "Пароль должен состоять минимум из 8 символов"
                                        }
                                    })
                                } type={password ? "text" : "password"} placeholder="Пароль" className="rounded-[30px] py-[10px] pl-[30px] pr-[5px] w-[459px] font-I-Reg text-[14px] focus:outline-0 placeholder:text-[#1D27A4]"/><button className=" rounded-[30px] py-[13px] pr-[15px]" onClick={()=>
                                    {setPassword(!password)
                                        
                                    }}>{password ? <ClosedEye/> : <OpenEye/>}</button></div> 
                        </div>
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
                    <input value="Войти" type="submit" className="button rounded-[30px] px-[217px] w-[502px] py-[13px] mb-[45px] cursor-pointer"/>
                </form>
            
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