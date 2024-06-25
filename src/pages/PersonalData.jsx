import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Required } from "../images/Required.svg"

const PersonalData = ()=> {

    const [isVisible, setVisible] = useState (false)
    const [password, setPassword] = useState(false)

    return (
        <div className="flex justify-center">
        <div className="background white-block px-[40px] pb-[40px] w-fit">
        <div className="flex flex-col items-center">
            <div className="font-I-Bold text-[30px] mb-[40px]">Личные данные</div>
            <div className="flex flex-col gap-[20px] mb-[20px]">
                <div className="flex flex-col">
                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Имя</div>
                    <input type="text" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[30px] pr-[15px] w-[411px] font-I-Reg text-[14px] focus:outline-0"/>
                </div>
                <div className="flex flex-col">
                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Фамилия</div>
                    <input type="text" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[30px] pr-[15px] w-[411px] font-I-Reg text-[14px] focus:outline-0"/>
                </div>
                <div className="flex flex-col">
                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Отчество</div>
                    <input type="text" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[30px] pr-[15px] w-[411px] font-I-Reg text-[14px] focus:outline-0"/>
                </div>
                <div className="flex flex-col">
                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Дата рождения</div>
                    <input type="date" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[30px] w-fit pr-[15px] font-I-Reg text-[14px] focus:outline-0"/>
                </div>
                <div className="flex flex-col">
                    <div className="font-I-Med text-[16px] mb-[5px]">Пол</div>
                    <div className="flex items-center radio">
                        <label className="font-I-Reg">
                            Мужской
                            <input type="radio" name="sex" value="Мужской" defaultChecked className=""/>
                            <span></span>
                        </label>
                        <label className="ml-[10px] font-I-Reg">
                            Женский
                            <input type="radio" name="sex" value="Женский" className=""/>
                            <span></span>
                        </label>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Номер телефона</div>
                        <Required className="ml-[5px]"/>
                    </div>
                    <input type="text" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[15px] pr-[15px] w-[411px] font-I-Reg text-[14px] focus:outline-0"/>
                </div>
                <div className="flex flex-col">
                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Адрес</div>
                    <input type="text" placeholder="Город, улица, номер дома" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[15px] pr-[15px] w-[411px] font-I-Reg text-[14px] focus:outline-0 placeholder:text-[#1D27A4]"/>
                    <div className="flex mt-[10px] gap-[10px]">
                    <input type="text" placeholder="Подъезд" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[15px] pr-[15px] w-[100px] font-I-Reg text-[14px] focus:outline-0 placeholder:text-[#1D27A4]"/>
                    <input type="text" placeholder="Этаж" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[15px] pr-[15px] w-[73px] font-I-Reg text-[14px] focus:outline-0 placeholder:text-[#1D27A4]"/>
                    <input type="text" placeholder="Квартира" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[15px] pr-[15px] w-[100px] font-I-Reg text-[14px] focus:outline-0 placeholder:text-[#1D27A4]"/>
                    </div>
                </div>
            </div>
            <div className={ isVisible ? "opacity-100 transition-opacity duration-[500ms]" : "opacity-0 transition-opacity duration-[500ms]"}>
                <div className="font-I-Bold text-[14px] mb-[10px] text-[#2AA300]">Изменения сохранены</div>
            </div>
            <button onClick={()=> {
                setVisible(true);
                setTimeout(()=> {setVisible(false)}, 5000)
            } } type="submit" className="button rounded-[30px] flex items-center justify-center w-[300px] py-[10px]">Сохранить изменения</button>
        </div>
        </div>
        </div>
    )
}

export default PersonalData;