import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Required } from "../images/Required.svg"
import axios from "axios";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../store";
 


const Registration2 = ()=> {

    const server_url = process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_SERVER_URL2

    const addToken = useAuthStore((state)=> state.addToken)
    addToken(localStorage.getItem("token"))
    const token = useAuthStore((state)=> state.token)

    const [data, setData] = useState("")

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm()

    const onSubmit = (data)=> {
        axios.post(`${server_url}/registration2`, {token: token, data: data})
        .then((response)=> {
            setData(response.data)
            localStorage.setItem("token", response.data.token)
            response.data.token ? window.location.href = '/' : <></>
            // setToken(response.data.token)
            
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    return (
        <div className="flex justify-center">
        <div className="background white-block px-[40px] pb-[40px] w-fit">
        <div className="flex flex-col items-center">
            <div className="font-I-Bold text-[30px] mb-[40px]">Заполните данные</div>
            <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Имя</div>
                    <input {
                            ...register('name')

                        } type="text" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[30px] pr-[15px] w-[411px] font-I-Reg text-[14px] focus:outline-0"/>
                </div>
                <div className="flex flex-col">
                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Фамилия</div>
                    <input {
                            ...register('lastname')

                        } type="text" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[30px] pr-[15px] w-[411px] font-I-Reg text-[14px] focus:outline-0"/>
                </div>
                <div className="flex flex-col">
                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Отчество</div>
                    <input {
                            ...register('surname')

                        } type="text" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[30px] pr-[15px] w-[411px] font-I-Reg text-[14px] focus:outline-0"/>
                </div>
                <div className="flex flex-col">
                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Дата рождения</div>
                    <input {
                            ...register('birthday')

                        } type="date" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[30px] w-fit pr-[15px] font-I-Reg text-[14px] focus:outline-0"/>
                </div>
                <div className="flex flex-col">
                    <div className="font-I-Med text-[16px] mb-[5px]">Пол</div>
                    <div className="flex items-center radio">
                        <label className="font-I-Reg">
                            Мужской
                            <input {
                            ...register('sex')

                        } type="radio" name="sex" value="Мужской" defaultChecked className=""/>
                            <span></span>
                        </label>
                        <label className="ml-[10px] font-I-Reg">
                            Женский
                            <input {
                            ...register('sex')

                        } type="radio" name="sex" value="Женский" className=""/>
                            <span></span>
                        </label>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Номер телефона</div>
                        <Required className="ml-[5px]"/>
                        <div className="font-I-Reg text-[red] ml-[5px] mb-[5px] h-[24px]">{ data ? data.message : errors?.phone && errors?.phone?.message}</div>
                    </div>
                    <input {
                            ...register('phone',{
                                required: "Поле не может быть пустым",
                                pattern: {
                                    value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{11,11}$/,
                                    message: "Неверный номер телефона",
                                  },
                            }
                            )
                        } type="text" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[15px] pr-[15px] w-[411px] font-I-Reg text-[14px] focus:outline-0"/>
                </div>
                <div className="flex flex-col">
                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Адрес</div>
                    <input {
                            ...register('town')

                        } type="text" placeholder="Город, улица, номер дома" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[15px] pr-[15px] w-[411px] font-I-Reg text-[14px] focus:outline-0 placeholder:text-[#1D27A4]"/>
                    <div className="flex mt-[10px] gap-[10px]">
                    <input {
                            ...register('door')

                        } type="text" placeholder="Подъезд" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[15px] pr-[15px] w-[100px] font-I-Reg text-[14px] focus:outline-0 placeholder:text-[#1D27A4]"/>
                    <input {
                            ...register('floor')

                        } type="text" placeholder="Этаж" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[15px] pr-[15px] w-[73px] font-I-Reg text-[14px] focus:outline-0 placeholder:text-[#1D27A4]"/>
                    <input {
                            ...register('room')

                        } type="text" placeholder="Квартира" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[15px] pr-[15px] w-[100px] font-I-Reg text-[14px] focus:outline-0 placeholder:text-[#1D27A4]"/>
                    </div>
                </div>
                <input value="Завершить регистрацию" type="submit" className="button rounded-[30px] flex items-center justify-center w-[411px] py-[10px] mt-[10px]"/>
            </form>
            
        </div>
        </div>
        </div>
    )
}

export default Registration2;