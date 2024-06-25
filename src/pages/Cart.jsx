import React from "react";
import {ReactComponent as Cupcake} from "../images/Cupcake.svg"
import { Link } from "react-router-dom";
import test_cake from "../images/test_cake.png"
import {ReactComponent as Heart} from "../images/Heart.svg"
import {ReactComponent as Trash} from "../images/Trash.svg"
import {ReactComponent as Plus} from "../images/Plus.svg"
import {ReactComponent as Minus} from "../images/Minus.svg"

const Cart = ()=> {

        const showNothing = ()=> {
            return (
                <>
                     <div className="flex flex-col items-center">
                        <Cupcake className="mb-[50px]"/>
                        <div className="font-I-Bold text-[30px]">Корзина пуста</div>
                        <div className="font-I-Med text-[20px] max-w-[480px] text-center my-[30px]">Посмотрите предложения на главной странице, воспользуйтесь каталогом или поиском</div>
                        <div className="flex gap-[20px]">
                            <Link to="/"><button className="button rounded-[30px] flex items-center justify-center w-[220px] py-[13px]">На главную</button></Link>
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
            <div className="font-I-Bold text-[30px] text-center mb-[40px]">Корзина</div>

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
                    <div className="flex flex-col items-end">
                        <div className="flex gap-[14px] mb-[10px]">
                        <Heart className="stroke-[#1D27A4] hover:fill-[#1D27A4] cursor-pointer"/>
                        <Trash className="stroke-[#1D27A4] hover:fill-[#DFDFDF] cursor-pointer"/>
                        </div>
                            <div className="font-I-Med text-[20px]">25000 ₽</div>
                            <div className="font-I-Reg text-[14px]">5000 ₽ за шт.</div>   
                        <div className="flex items-center justify-between w-[93px] mt-[10px]">
                            <Plus className="cursor-pointer fill-[#5965F9] hover:fill-[#1D27A4]"/>
                            <div className="font-I-Reg text-[16px]">10</div>
                            <Minus className="cursor-pointer fill-[#5965F9] hover:fill-[#1D27A4]"/>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col items-center justify-end flex-grow">
                <div className="font-I-Reg text-[20px] mt-[40px]">5 товаров</div>
                <div className="font-I-Bold text-[20px] mb-[20px]">25000 ₽</div>
                <Link to="/orders"><button type="submit" className="button py-[13px] rounded-[30px] flex items-center justify-center w-[220px]">Оформить заказ</button></Link>
            </div>
        </div>
        </div>
        
        </>
    )
}

export default Cart;