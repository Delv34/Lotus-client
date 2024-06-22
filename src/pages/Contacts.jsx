import React from "react";
import { ReactComponent as Required } from "../images/Required.svg"

const Contacts = ()=> {
    return (
        <div className="flex justify-center">
        <div className="background white-block px-[30px] min-w-[730px] min-h-[1007px]">
            <div className="flex flex-col items-center">
                <div className="font-I-Bold text-[30px] mb-[40px]">Контакты</div>
                <div className="flex flex-col justify-start w-full mb-[40px]">
                    <div className="font-CS-Reg text-[20px] mb-[25px] text-[#1D27A4]">Lotus Sweet-shop</div>
                    <div className="flex flex-col font-I-Reg text-[16px] gap-[15px]">
                        <div>Адрес: Г. Владивосток, ул. Суханова 13</div>
                        <div>Телефон: 8-800-555-35-35</div>
                        <div>График работы: С 9:00 до 21:00 Пн</div>
                        <div>E-mail: lotus-sweetshop-vl@gmail.com</div>
                    </div>  
                </div>
                <div className="font-I-Med text-[20px] mb-[20px]">Форма обратной связи</div>
                <div className="flex flex-col justify-start w-full mb-[30px]">
                    <div className="flex ml-[5px] mb-[5px]">
                        <div className="font-I-Med">E-mail</div>
                        <Required/>
                    </div>
                    <input type="text" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[12px] pl-[30px] pr-[15px] w-[294px] font-I-Reg text-[14px] focus:outline-0 mb-[20px]"/>

                    <div className="flex ml-[5px] mb-[5px]">
                        <div className="font-I-Med">Сообщение</div>
                        <Required/>
                    </div>
                    <textarea name="" id="" className="overflow-hidden resize-none border-[3px] border-[#8D96FF] rounded-[30px] py-[5px] pl-[15px] pr-[15px] w-[445px] h-[100px] font-I-Reg text-[14px] focus:outline-0"></textarea>
                </div>
                <div className="relative overflow-hidden rounded-[12px]">
                        <a href="https://yandex.ru/maps/75/vladivostok/?utm_medium=mapframe&utm_source=maps" className="text-[#eee] text-[12px] absolute top-0">Владивосток</a>
                        <a href="https://yandex.ru/maps/75/vladivostok/house/ulitsa_sukhanova_13/ZUoHaA9pT0ICVUJuYGJwcHtjbQ0=/?indoorLevel=1&ll=131.896759%2C43.117096&utm_medium=mapframe&utm_source=maps&z=17.12" className="text-[#eee] text-[12px] absolute top-[14px]">Улица Суханова, 13 — Яндекс Карты</a>
                        <iframe src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=131.896759%2C43.117096&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Nzc4NTg4MhJk0KDQvtGB0YHQuNGPLCDQn9GA0LjQvNC-0YDRgdC60LjQuSDQutGA0LDQuSwg0JLQu9Cw0LTQuNCy0L7RgdGC0L7Quiwg0YPQu9C40YbQsCDQodGD0YXQsNC90L7QstCwLCAxMyIKDZLlA0MV53csQg%2C%2C&z=17.12" width="670" height="400" frameborder="1" allowfullscreen="true" className="relative"></iframe>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contacts;