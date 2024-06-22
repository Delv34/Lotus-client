import React from "react";
import card_cake from "../images/card_cake.png"
import Select from 'react-select'
import {ReactComponent as Trash} from "../images/Trash.svg"

const Delete_product = ()=> {

    const options = [
        { value: 'chocolate', label: 'Шоколад' },
        { value: 'strawberry', label: 'Клубника' },
        { value: 'vanilla', label: 'Ваниль' }
      ]

    return (
        <div className="flex justify-center">
            <div className="background white-block px-[30px] min-w-[940px] min-h-[460px]">
                <div className="flex flex-col items-center">
                    <div className="font-I-Bold text-[30px]">Товары</div>
                    <div className="flex justify-between w-full mb-[60px]">
                        <div className="flex mt-[40px] gap-[10px]">
                            <div className="flex flex-col">
                            <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Категория</div>
                            <Select options={options} placeholder="Выберите категорию" classNamePrefix="custom-select"/>
                            </div>
                            <div className="flex flex-col">
                            <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Товар</div>
                            <Select options={options} placeholder="Выберите товар" classNamePrefix="custom-select2"/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center margin ">
                                <img className="object-cover w-[220px] h-[148px] rounded-[12px] mb-[10px]" src={card_cake} alt="" />
                            <div className="flex flex-col">
                                <div className="font-I-Reg text-[16px] mb-[10px]">Торт "Четыре шоколада"</div>
                                <div className="flex flex-col">
                                    <div className="flex w-full gap-[10px] mb-[10px]">
                                        <div className="font-I-Med text-[14px]">5000 ₽</div>
                                        <div className="font-I-Reg text-[14px]">1.5 кг</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="button rounded-[30px] w-[220px] py-[7px] flex items-center justify-center text-[16px]">
                        <Trash className="trash stroke-white mr-[10px]"/>
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Delete_product;