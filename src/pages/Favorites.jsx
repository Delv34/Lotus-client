import React from "react";
import {ReactComponent as Cupcake} from "../images/Cupcake.svg"
import { Link } from "react-router-dom";
import test_cake from "../images/test_cake.png"
import {ReactComponent as Trash} from "../images/Trash.svg"
import { ReactComponent as Cart } from "../images/Cart.svg"


const Favorites = ()=> {

    const showNothing = ()=> {
        return (
            <>
                <div className="flex flex-col items-center">
                    <Cupcake className="mb-[50px]"/>
                    <div className="font-I-Bold text-[30px] mb-[108px]">В списке пока нет ни одного избранного товара</div>
                    <div className="flex">
                        <Link to="/catalog"><button className="button rounded-[30px] flex items-center justify-center w-[220px] py-[13px]">В каталог</button></Link>
                    </div>
                </div>
                
            </>
        )
    }

    return (
        <>

<div className="background flex min-w-[980px] min-h-[928px] white-block px-[30px]">
        <div className="flex flex-col w-full justify-between">
            <div className="font-I-Bold text-[30px] text-center mb-[40px]">Избранное</div>

            {/* {tovars > 0 ? showOrders(props) : showNothing()} */}

            <div className="flex flex-col gap-[30px]">
            
                    {/* cake1 */}
            
                <div className="flex justify-between">
                    <div className="flex gap-[10px]">
                        <img src={test_cake} className="h-[117px]" alt="" />
                        <div className="flex flex-col justify-between">
                            <div className="font-I-Med text-[18px] flex-grow">Торт "Четыре шоколада"</div>
                            <div className="flex gap-[10px]">
                                <div className="font-I-Reg text-[16px]">Вес: 2.5 кг</div>
                                <div className="font-I-Reg text-[16px]">Вид: Бисквитный</div>
                            </div>
                            <div className="font-I-Reg text-[16px]">Начинка: Шоколад</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-[9px]">
                        <Trash className="stroke-[#1D27A4] hover:fill-[#DFDFDF] cursor-pointer"/>
                            <div className="font-I-Med text-[20px]">25000 ₽</div> 
                            <button className="button rounded-[30px] px-[33px] py-[5px] flex items-center justify-center text-[16px]">
                                <Cart className="cart stroke-white mr-[10px]"/>
                                В корзину
                            </button>
                    </div>
                </div>
                
                <div className="flex justify-between">
                    <div className="flex gap-[10px]">
                        <img src={test_cake} className="h-[117px]" alt="" />
                        <div className="flex flex-col justify-between">
                            <div className="font-I-Med text-[18px] flex-grow">Торт "Четыре шоколада"</div>
                            <div className="flex gap-[10px]">
                                <div className="font-I-Reg text-[16px]">Вес: 2.5 кг</div>
                                <div className="font-I-Reg text-[16px]">Вид: Бисквитный</div>
                            </div>
                            <div className="font-I-Reg text-[16px]">Начинка: Шоколад</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-[9px]">
                        <Trash className="stroke-[#1D27A4] hover:fill-[#DFDFDF] cursor-pointer"/>
                            <div className="font-I-Med text-[20px]">25000 ₽</div> 
                            <button className="button rounded-[30px] px-[33px] py-[5px] flex items-center justify-center text-[16px]">
                                <Cart className="cart stroke-white mr-[10px]"/>
                                В корзину
                            </button>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-[10px]">
                        <img src={test_cake} className="h-[117px]" alt="" />
                        <div className="flex flex-col justify-between">
                            <div className="font-I-Med text-[18px] flex-grow">Торт "Четыре шоколада"</div>
                            <div className="flex gap-[10px]">
                                <div className="font-I-Reg text-[16px]">Вес: 2.5 кг</div>
                                <div className="font-I-Reg text-[16px]">Вид: Бисквитный</div>
                            </div>
                            <div className="font-I-Reg text-[16px]">Начинка: Шоколад</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-[9px]">
                        <Trash className="stroke-[#1D27A4] hover:fill-[#DFDFDF] cursor-pointer"/>
                            <div className="font-I-Med text-[20px]">25000 ₽</div> 
                            <button className="button rounded-[30px] px-[33px] py-[5px] flex items-center justify-center text-[16px]">
                                <Cart className="cart stroke-white mr-[10px]"/>
                                В корзину
                            </button>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-[10px]">
                        <img src={test_cake} className="h-[117px]" alt="" />
                        <div className="flex flex-col justify-between">
                            <div className="font-I-Med text-[18px] flex-grow">Торт "Четыре шоколада"</div>
                            <div className="flex gap-[10px]">
                                <div className="font-I-Reg text-[16px]">Вес: 2.5 кг</div>
                                <div className="font-I-Reg text-[16px]">Вид: Бисквитный</div>
                            </div>
                            <div className="font-I-Reg text-[16px]">Начинка: Шоколад</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-[9px]">
                        <Trash className="stroke-[#1D27A4] hover:fill-[#DFDFDF] cursor-pointer"/>
                            <div className="font-I-Med text-[20px]">25000 ₽</div> 
                            <button className="button rounded-[30px] px-[33px] py-[5px] flex items-center justify-center text-[16px]">
                                <Cart className="cart stroke-white mr-[10px]"/>
                                В корзину
                            </button>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-[10px]">
                        <img src={test_cake} className="h-[117px]" alt="" />
                        <div className="flex flex-col justify-between">
                            <div className="font-I-Med text-[18px] flex-grow">Торт "Четыре шоколада"</div>
                            <div className="flex gap-[10px]">
                                <div className="font-I-Reg text-[16px]">Вес: 2.5 кг</div>
                                <div className="font-I-Reg text-[16px]">Вид: Бисквитный</div>
                            </div>
                            <div className="font-I-Reg text-[16px]">Начинка: Шоколад</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-[9px]">
                        <Trash className="stroke-[#1D27A4] hover:fill-[#DFDFDF] cursor-pointer"/>
                            <div className="font-I-Med text-[20px]">25000 ₽</div> 
                            <button className="button rounded-[30px] px-[33px] py-[5px] flex items-center justify-center text-[16px]">
                                <Cart className="cart stroke-white mr-[10px]"/>
                                В корзину
                            </button>
                    </div>
                </div>

            </div>
            <div className="flex flex-col items-center justify-end flex-grow">
                <Link to="/catalog"><button className="button py-[13px] rounded-[30px] flex items-center justify-center w-[220px] mt-[40px]">В каталог</button></Link>
            </div>
        </div>
        </div>
        </>
    )
}

export default Favorites;