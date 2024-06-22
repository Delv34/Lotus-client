import React from "react";
import { ReactComponent as Lotus} from "../images/Lotus.svg"
import { ReactComponent as Magnifier} from "../images/Magnifier.svg"
import { ReactComponent as Cart } from "../images/Cart.svg"
import { ReactComponent as Heart } from "../images/Heart.svg"
import { ReactComponent as Profile } from "../images/Profile.svg"
import { Link } from "react-router-dom";


const Menu = function () {

return (
    <>
    <div className="background h-[64px] bg-[#535DD4] w-screen flex justify-center font-bold">
        <div className="flex h-[100%] items-center">
            <Link to="/" className="logo flex items-center gap-[15px] mr-[60px]">
                <Lotus/>
                <div className="font-CS-Reg text-[24px] text-white">Lotus Sweet-shop</div>
            </Link>
            <div className="search flex items-center gap-[15px] mr-[45px]">
                <Magnifier/>
                <input type="text" className=" w-[249px] h-[30px] px-[15px] rounded-[10px] text-[#1D27A4] outline-none font-I-Reg " />
            </div>
            <div className="flex items-center gap-[40px] mr-[90px]">
                <Link to="/catalog" className="font-I-Med text-white text-xl hover:text-[rgba(255,255,255,0.8)]">Каталог</Link>
                <Link to="/about" className="font-I-Med text-white text-xl hover:text-[rgba(255,255,255,0.8)]">О нас</Link>
                <Link to="/shipping" className="font-I-Med text-white text-xl hover:text-[rgba(255,255,255,0.8)]">Доставка и оплата</Link>
                <Link to="/contacts" className="font-I-Med text-white text-xl hover:text-[rgba(255,255,255,0.8)]">Контакты</Link>
            </div>
            <div className="flex items-center gap-[44px]">
                <Link to="/cart" ><Cart className=" stroke-white hover:stroke-[rgba(255,255,255,0.8)]"/></Link>
                <Link to="/favorites"><Heart className="stroke-white hover:fill-white"/></Link>
                <Link to="/registration">
                    <div className="profile relative">
                            <Profile className="fill-white hover:fill-[rgba(255,255,255,0.8)]"/>
                            
                        {/* <div className="overlay">
                            <div className="w-[158px] h-[10px] bg-transparent"></div>
                            <div className="overlay-block text-[14px] px-[15px] py-[15px]">
                                <div className="flex flex-col">
                                <Link to="/profile" className="font-I-Reg mb-[8px] hover:text-[#3A49FF]">Личные данные</Link>
                                <Link to="/orders" className="font-I-Reg hover:text-[#3A49FF]">Заказы</Link>  
                                <Link to="/orders" className="font-I-Reg hover:text-[#3A49FF]">Выйти из аккаунта</Link>  
                                </div>
                            </div>
                        </div> */}

                    </div>
                    
                </Link>
            </div>
        </div>
    </div>
    </>
    )
}

export default Menu;