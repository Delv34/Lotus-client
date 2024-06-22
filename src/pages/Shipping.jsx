import React from "react";

const Shipping = ()=> {
    return (
        <div className="flex justify-center">
            <div className="background white-block px-[30px] max-w-[730px] min-h-[885px]">
                <div className="flex flex-col items-center">
                    <div className="font-I-Bold text-[30px] mb-[40px]">Доставка и оплата</div>
                    <div className="font-I-Med text-[16px] flex flex-col gap-[20px] mb-[30px]">
                        <div>Наш интернет-магазин осуществляет доставку по Владивостоку:</div>
                        <ul>
                            <li>Курьерская доставка по Владивостоку — 350 руб (от моста на ост. Русский до ост. Заря). </li>
                            <li>Самовывоз из нашего магазина — бесплатно!</li>
                        </ul>
                        <div>Сроки доставки:</div>
                        <ul>
                            <li>Курьерская доставка по Владивостоку осуществляется в течении 1-2 рабочих дней после оформления заказа и согласования времени и адреса доставки.</li>
                            <li>Самовывоз — через час после заказа.</li>
                        </ul>
                        <div>Доставка осуществляется бесплатно при сумме заказа более 3500 рублей.</div>
                        <div>Оплатить заказ возможно:</div>
                        <ul>
                            <li>Наличными или картой Visa, Mastercard или МИР, при получении в магазине.</li>
                            <li>Картой Visa, Mastercard или МИР при оплате на сайте.</li>
                        </ul>
                        <div>Адрес для самовывоза - Г.Владивосток, ул. Суханова 13</div>
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

export default Shipping;