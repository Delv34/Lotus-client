import React, { useState } from "react";
import { ReactComponent as OpenEye} from "../images/OpenEye.svg"
import { ReactComponent as ClosedEye} from "../images/ClosedEye.svg"
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form"
import axios from "axios";
import {create} from "zustand"
import useToken from "../store";

const Registration = ()=> {

    const server_url = process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_SERVER_URL2

    // const useUserStore = create((set) => ({
    //     token: "",
    //     favorites: [],
    //     cart: [],
    //     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    //     removeAllBears: () => set({ bears: 0 }),
    //     updateBears: (newBears) => set({ bears: newBears }),
    //   }))
    
    const [password, setPassword] = useState(false)
    const [password2, setPassword2] = useState(false)
    const [passwordvalue, setPasswordvalue] = useState("")
    const [data, setData] = useState("")

    // const setToken = useToken((state)=> state.setToken)

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm()

    const onSubmit = (data)=> {
        axios.post(`${server_url}/registration`, data)
        .then((response)=> {
            setData(response.data)
            localStorage.setItem("token", response.data.token)
            response.data.token ? window.location.href = '/registration2' : <></>
            // setToken(response.data.token)
            
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    return (
        <>
        <div className="background flex items-center justify-center white-block min-w-[980px] px-[40px]">
        <div className="flex flex-col items-center">
            <div className="font-I-Bold text-[30px] mb-[16px]">Регистрация</div>
                <form className="flex flex-col gap-[9px] mb-[45px]" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                        <div className="font-I-Reg text-[red] ml-[5px] mb-[5px] h-[24px]">{ data ? data.message != "Пользователь был успешно зарегистрирован" ? data.message : errors?.email && errors?.email?.message : <></>}</div>
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
                            <div className="font-I-Reg text-[red] h-[24px] ml-[5px] mb-[5px]">{errors?.password && errors?.password?.message}</div>
                            <div className="flex border-[3px] border-[#8D96FF] rounded-[30px]"><input {
                            ...register('password', {
                                required: "Поле не может быть пустым",
                                minLength: {
                                    value: 8,
                                    message: "Пароль должен состоять минимум из 8 символов"
                                }
                            })
                        } onChange={(e)=> {
                            setPasswordvalue(e.target.value)
                        }} type={password ? "text" : "password"} placeholder="Пароль" className="placeholder:text-[#1D27A4] rounded-[30px] py-[10px] pl-[30px] pr-[5px] w-[459px] font-I-Reg text-[14px] focus:outline-0"/><button className=" rounded-[30px] py-[13px] pr-[15px]"
                            onClick={()=>
                                {setPassword(!password)
                                    
                                }}>{password ? <ClosedEye/> : <OpenEye/>}</button></div>   
                        </div>
                        <div className="flex flex-col mb-[24px]">
                            <div className="font-I-Reg text-[red] ml-[5px] mb-[5px] h-[24px]">{errors?.confirmpassword && errors?.confirmpassword?.message}</div>
                            <div className="flex border-[3px] border-[#8D96FF] rounded-[30px]"><input {
                            ...register('confirmpassword', {
                                required: "Поле не может быть пустым",
                                validate: (value)=> {
                                   return (
                                        passwordvalue == value || "Пароли не совпадают"   
                                   )
                                }
                            })
                        } type={password2 ? "text" : "password"} placeholder="Повторите пароль" className="placeholder:text-[#1D27A4] rounded-[30px] py-[10px] pl-[30px] pr-[5px] w-[459px] font-I-Reg text-[14px] focus:outline-0"/><button className=" rounded-[30px] py-[13px] pr-[15px]"
                            onClick={()=>{setPassword2(!password2)}}>{password2 ? <ClosedEye/> : <OpenEye/>}</button></div>
                        </div>
                        
                            <input value="Регистрация" type="submit" className="button rounded-[30px] flex items-center justify-center w-[502px] py-[10px] cursor-pointer"/>        

                </form>
            <Link to="/login" className="font-I-Reg text-[20px] hover:text-[#3A49FF]">Я уже зарегистрирован</Link>
        </div>
        </div>
        </>
    )
}

export default Registration;