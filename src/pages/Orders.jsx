import React, { useState } from "react";
import small_cake from "../images/small_cake.png"

const Orders = ()=> {

    const [isActive, setActive] = useState(true);

    return (
        <div className="flex justify-center">
            <div className="background white-block px-[30px] min-w-[652px] min-h-[756px]">
                <div className="flex flex-col items-center">
                    <div className="font-I-Bold text-[30px] mb-[40px]">Заказы</div>
                    <div className="flex gap-[20px] mb-[30px] justify-start w-full">
                            <button onClick={()=> setActive(true)} className={isActive ? "button_order button_active" : "button_order button_inactive"}>Все</button>
                            <button onClick={()=> setActive(false)} className={isActive ? "button_order button_inactive" : "button_order button_active"}>Активные</button>   
                    </div>
                    <div className="flex flex-col w-full gap-[50px]">
                         <div className="flex justify-between w-full">
                            <div className="flex flex-col gap-[10px]">
                                <div className="font-I-Regular text-[20px]">Заказ от 28 мая</div>
                                <div className="font-I-Med text-[16px]">В обработке</div>
                            </div>
                            <div className="flex flex-col items-end gap-[20px]">
                                <div className="font-I-Bold text-[20px]">25000 ₽</div>
                                <div className="flex flex-row-reverse gap-[10px]">
                                    <img src={small_cake} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between w-full">
                            <div className="flex flex-col gap-[10px]">
                                <div className="font-I-Regular text-[20px]">Заказ от 29 мая</div>
                                <div className="font-I-Med text-[16px]">Собираем</div>
                            </div>
                            <div className="flex flex-col items-end gap-[20px]">
                                <div className="font-I-Bold text-[20px]">25000 ₽</div>
                                <div className="flex flex-row-reverse gap-[10px]">
                                    <img src={small_cake} alt="" />
                                    <img src={small_cake} alt="" />
                                    <img src={small_cake} alt="" />
                                    <img src={small_cake} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                   
                    
                
                </div>
            </div>
        </div>
    )
}

export default Orders;