import React from "react";
import { Link } from "react-router-dom";

const Footer = ()=> {
    return (
        <>
        <div className="background bg-[#E1E5FF] w-screen flex justify-center pt-[30px] pb-[45px]">
            <div className="flex text-[#1D27A4] justify-between">
                <div className="flex flex-col gap-[15px] mr-[93px]">
                    <div className="font-I-Bold text-[20px] mb-[15px]">Кондитерская</div>
                    <Link to="/about"><div className="font-I-Reg text-[16px] hover:text-[#3A49FF]">О нас</div></Link>
                    <Link to="/contacts"><div className="font-I-Reg text-[16px] hover:text-[#3A49FF]">Контакты</div></Link>
                    <Link to="/shipping"><div className="font-I-Reg text-[16px] hover:text-[#3A49FF]">Доставка и оплата</div></Link>
                </div>
                <div className="flex flex-col gap-[15px] mr-[53px]">
                    <div className="font-I-Bold text-[20px] mb-[15px]">Каталог</div>
                    <a href=""><div className="font-I-Reg text-[16px] hover:text-[#3A49FF]">Торты</div></a>
                    <a href=""><div className="font-I-Reg text-[16px] hover:text-[#3A49FF]">Выпечка</div></a>
                    <a href=""><div className="font-I-Reg text-[16px] hover:text-[#3A49FF]">Печенье</div></a>
                    <a href=""><div className="font-I-Reg text-[16px] hover:text-[#3A49FF]">Рулеты</div></a>
                    <a href=""><div className="font-I-Reg text-[16px] hover:text-[#3A49FF]">Пирожные</div></a>
                    <a href=""><div className="font-I-Reg text-[16px] hover:text-[#3A49FF]">Тематические сладости</div></a>
                </div>
                <div className="flex flex-col gap-[15px] mr-[105px]">
                    <a href=""><div className="font-I-Reg text-[16px] mt-[60px] hover:text-[#3A49FF]">Пахлава</div></a>
                    <a href=""><div className="font-I-Reg text-[16px] hover:text-[#3A49FF]">Пончики</div></a>
                    <a href=""><div className="font-I-Reg text-[16px] hover:text-[#3A49FF]">Макаруны</div></a>
                    <a href=""><div className="font-I-Reg text-[16px] hover:text-[#3A49FF]">Шоколад</div></a>
                    <a href=""><div className="font-I-Reg text-[16px] hover:text-[#3A49FF]">Пряники</div></a>
                    <a href=""><div className="font-I-Reg text-[16px] hover:text-[#3A49FF]">Конфеты</div></a>
                </div>
                <div className="flex flex-col gap-[15px]">
                    <div className="font-I-Bold text-[20px] mb-[15px]">Контакты</div>
                    <div className="font-I-Reg text-[16px]">Время работы: с 9:00 до 21:00</div>
                    <div className="font-I-Reg text-[16px]">Телефон: 8-800-555-35-35</div>
                    <div className="font-I-Reg text-[16px]">Г. Владивосток, ул. Суханова 13</div>
                    <div className="font-I-Reg text-[16px]">E-mail: lotus-sweetshop-vl@gmail.com</div>
                </div>
                
            </div>
        </div>


        </>
    )
}

export default Footer;