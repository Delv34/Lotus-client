import axios from 'axios'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ReactComponent as OpenEye} from "../images/OpenEye.svg"
import { ReactComponent as ClosedEye} from "../images/ClosedEye.svg"
import { useAuthStore } from '../store'
import bcrypt from "bcrypt"

function Security() {

    const server_url = process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_SERVER_URL2

    const [isVisible, setVisible] = useState (false)
    const [password, setPassword] = useState(false)
    const [data, setData] = useState("")
    const addToken = useAuthStore((state)=> state.addToken)
    addToken(localStorage.getItem("token"))
    const token = useAuthStore((state)=> state.token)

    useLayoutEffect(()=> {
        axios.post(`${server_url}/getuser`, {token: token})
        .then(((response) => {
            setData(response.data)
        }))
        .catch((error)=> {
            console.log(error)
        })
    }, [])

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm()

    const onSubmit = (data)=> {
        
    }
    
    return (
        <div className="flex justify-center">
        <div className="background white-block px-[40px] pb-[40px] w-fit">
        <div className="flex flex-col items-center">
            <div className="font-I-Bold text-[30px] mb-[40px]">Безопасность</div>
            <form className="flex flex-col gap-[20px] items-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                    <div className="flex gap-[10px]">
                        <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Email</div>
                        <div className="font-I-Reg text-[red] ml-[5px] mb-[5px] h-[24px]">{ data ? data.message : errors?.email && errors?.email?.message}</div>
                    </div>
                    <input {
                            ...register('email',{
                                required: "Поле не может быть пустым",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Некорректный email",
                                  },
                            }
                            )
                        }  type="email" value={data.email} className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[30px] pr-[15px] w-[411px] font-I-Reg text-[14px] focus:outline-0"/>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-[10px]">
                        <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Пароль</div>
                        <div className="font-I-Reg text-[red] h-[24px] ml-[5px] mb-[5px]">{errors?.password && errors?.password?.message}</div>
                    </div>
                    <div className="flex border-[3px] border-[#8D96FF] rounded-[30px]"><input {
                            ...register('password', {
                                required: "Поле не может быть пустым",
                                minLength: {
                                    value: 8,
                                    message: "Пароль должен состоять минимум из 8 символов"
                                }
                            })
                        } type={password ? "text" : "password"} value={ bcrypt. data.password} className="rounded-[30px] py-[10px] pl-[30px] pr-[5px] w-[368px] font-I-Reg text-[14px] focus:outline-0"/><button className=" rounded-[30px] py-[13px] pr-[15px]"
                            onClick={()=>
                                {setPassword(!password)
                                    
                                }}>{password ? <ClosedEye/> : <OpenEye/>}</button></div>
                </div>
                <div className="flex flex-col">
                    <div className={ isVisible ? "opacity-100 transition-opacity duration-[500ms]" : "opacity-0 transition-opacity duration-[500ms]"}>
                        <div className="font-I-Bold text-[14px] mb-[10px] text-[#2AA300]">Изменения сохранены</div>
                    </div>
                    <input onClick={()=> {
                        setVisible(true);
                        setTimeout(()=> {setVisible(false)}, 5000)
                    } } type="submit" value="Сохранить изменения"  className="button rounded-[30px] flex items-center justify-center w-[300px] py-[10px]"/>  
                </div>
            </form>
            

            
        </div>
        </div>
        </div>
    )
}

export default Security;
