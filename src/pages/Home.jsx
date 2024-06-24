import React, { useEffect, useState } from "react";
import home from "../images/home.png"
import { ReactComponent as Lotus} from "../images/Lotus.svg"
import { Link } from "react-router-dom";
import news1 from "../images/news1.png"
import news2 from "../images/news2.png"
import news3 from "../images/news3.png"
import card_cake from "../images/card_cake.png"
import { ReactComponent as Arrow} from "../images/Arrow.svg"
import {ReactComponent as Cart} from "../images/Cart.svg"
import {ReactComponent as Heart} from "../images/Heart.svg"
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from "axios";
import { useAuthStore } from "../store";


const Home = ()=> {

    const [products, setProducts] = useState([])

    const server_url = process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_SERVER_URL2

    useEffect(()=> {
        axios.get(server_url + "/popular").then(response => {
            const products = response.data
            console.log(products)
            setProducts(products)
        }).catch(error => {
            console.log(error)
        })

    }, [])

    const token = useAuthStore((state)=> state.token)
    const addtoken = useAuthStore((state)=> state.addToken)
    console.log(token)
    return (
        <div className="flex justify-center">
            <div className="bg-white rounded-[12px] shadow-reg min-w-[940px] min-h-[1930px]">
                <div className="flex flex-col items-center">
                    <div className="relative mb-[40px]">
                        <img src={home}/>
                        <div className="absolute top-0 left-[262px]">
                            <div className="flex flex-col items-center mt-[20px]">
                                <div className="font-CS-Bold text-[48px] mb-[20px] text-white">Lotus Sweet-Shop</div>
                                <Lotus className="w-[262px] h-[262px] mb-[51px]"/>
                                <Link to="/catalog"><button className="button rounded-[30px] flex items-center justify-center w-[220px] py-[13px] hover:text-white">В каталог</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className=" text-[#1D27A4] mb-[60px]">
                        <div className="font-I-Bold text-[30px] mb-[35px] text-center">Новости</div>

                        <div className="w-[856px] flex items-center">
                        <Arrow className="prevarrow fill-[#1D27A4] hover:fill-[#5965F9] cursor-pointer"/>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            navigation={{
                            clickable: true,
                            nextEl: ".nextarrow",
                            prevEl: ".prevarrow",
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                            <div className="flex flex-col items-center max-w-[220px] min-h-[441px]">
                                <div className="font-I-Reg text-[16px] mb-[5px]">21.05.24</div>
                                <div className="font-I-Bold text-[20px] mb-[10px]">Новинка!</div>
                                <img className="mb-[10px]" src={news1}/>
                                <div className="font-I-Reg text-[14px] mx-[10px]">Мы решили расширить наш ассортимент в честь наступления лета. Поэксперементировав наши кондитеры смогли придумать новые...</div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="flex flex-col items-center max-w-[220px] min-h-[441px]">
                                <div className="font-I-Reg text-[16px] mb-[5px]">25.04.24</div>
                                <div className="font-I-Bold text-[20px] mb-[10px]">Мероприятие</div>
                                <img className="mb-[10px]" src={news2}/>
                                <div className="font-I-Reg text-[14px] mx-[10px]">Наш кондитерский магазин будет проводить мастер-класс на городской площади 1 мая.</div>
                            </div> 
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="flex flex-col items-center max-w-[220px] min-h-[441px]">
                                <div className="font-I-Reg text-[16px] mb-[5px]">16.04.24</div>
                                <div className="font-I-Bold text-[20px] mb-[10px]">Рецепт</div>
                                <img className="mb-[10px]" src={news3}/>
                                <div className="font-I-Reg text-[14px] mx-[10px]">Наши повара-кондитеры, захотели поделиться рецептом домашней шарлотки с нашими клиентами.</div>
                            </div> 
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="flex flex-col items-center max-w-[220px] min-h-[441px]">
                                <div className="font-I-Reg text-[16px] mb-[5px]">21.05.24</div>
                                <div className="font-I-Bold text-[20px] mb-[10px]">Новинка!</div>
                                <img className="mb-[10px]" src={news1}/>
                                <div className="font-I-Reg text-[14px] mx-[10px]">Мы решили расширить наш ассортимент в честь наступления лета. Поэксперементировав наши кондитеры смогли придумать новые...</div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="flex flex-col items-center max-w-[220px] min-h-[441px]">
                                <div className="font-I-Reg text-[16px] mb-[5px]">25.04.24</div>
                                <div className="font-I-Bold text-[20px] mb-[10px]">Мероприятие</div>
                                <img className="mb-[10px]" src={news2}/>
                                <div className="font-I-Reg text-[14px] mx-[10px]">Наш кондитерский магазин будет проводить мастер-класс на городской площади 1 мая.</div>
                            </div> 
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="flex flex-col items-center max-w-[220px] min-h-[441px]">
                                <div className="font-I-Reg text-[16px] mb-[5px]">16.04.24</div>
                                <div className="font-I-Bold text-[20px] mb-[10px]">Рецепт</div>
                                <img className="mb-[10px]" src={news3}/>
                                <div className="font-I-Reg text-[14px] mx-[10px]">Наши повара-кондитеры, захотели поделиться рецептом домашней шарлотки с нашими клиентами.</div>
                            </div> 
                            </SwiperSlide>
                        </Swiper>
                        <Arrow className="nextarrow rotate-180 fill-[#1D27A4] hover:fill-[#5965F9] cursor-pointer" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-[#1D27A4] mb-[60px]">
                        <div className="font-I-Bold text-[30px] mb-[40px]">Популярные товары</div>
                        <div className="flex flex-wrap max-w-[780px] gap-x-[60px] gap-y-[50px]">
                            {
                                products.map((product)=>{
                                    return(
                                        <div className="flex flex-col items-center h-[281px]">
                                            <div className="relative mb-[10px]">
                                                <img className="object-cover w-[220px] h-[148px] rounded-[12px]" src={require("../images/products" + product.images[0])} alt="" />
                                                <Heart className="stroke-[#1D27A4] hover:fill-[#1D27A4] cursor-pointer absolute top-[15px] right-[15px]"/>
                                            </div>
                                            <div className="flex flex-col justify-between h-full">
                                                <div className="font-I-Reg text-[16px]">{product.name}</div>
                                                <div className="flex flex-col">
                                                    <div className="flex w-full gap-[10px] mb-[10px]">
                                                        <div className="font-I-Med text-[14px]">{product.price} ₽</div>
                                                        <div className="font-I-Reg text-[14px]">{product.weight > 1000 ? product.weight/1000 : product.weight} {product.weight > 1000 ? "кг" : "г"}</div>
                                                    </div>
                                                    <button className="button rounded-[30px] w-[196px] py-[5px] flex items-center justify-center">
                                                        <Cart className="cart stroke-white mr-[10px]"/>
                                                        <div className="text-[16px]">В корзину</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;