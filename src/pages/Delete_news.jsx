import React from "react";
import Select from 'react-select';
import news2 from "../images/news2.png"
import {ReactComponent as Trash} from "../images/Trash.svg"

const Delete_news = ()=> {

    const options = [
        { value: 'chocolate', label: 'Шоколад' },
        { value: 'strawberry', label: 'Клубника' },
        { value: 'vanilla', label: 'Ваниль' }
      ]

    return (
        <div className="flex justify-center">
            <div className="background white-block px-[30px] min-w-[940px] min-h-[460px]">
                <div className="flex flex-col items-center">
                    <div className="font-I-Bold text-[30px]">Новости</div>
                    <div className="flex w-full justify-between">
                        <div className="flex flex-col mt-[40px]">
                            <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Новость</div>
                            <Select options={options} placeholder="Выберите новость" classNamePrefix="custom-select2"/>
                        </div>
                            <button className="button rounded-[30px] w-[220px] py-[7px] mb-[20px] mr-[110px] self-end h-max[50px] flex items-center justify-center text-[16px]">
                                <Trash className="trash stroke-white mr-[10px]"/>
                                Удалить
                            </button>   
                        <div className="flex flex-col items-center w-[220px] h-[441px]">
                            <div className="font-I-Reg text-[16px] mb-[5px]">25.04.24</div>
                            <div className="font-I-Bold text-[20px] mb-[10px]">Мероприятие</div>
                            <img className="mb-[10px]" src={news2} alt="" />
                            <div className="font-I-Reg w-[200] px-[10px] text-[14px] break-words">Наш кондитерский магазин будет проводить мастер-класс на городской площади 1 мая.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delete_news;