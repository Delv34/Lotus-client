import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import {ReactComponent as Heart} from "../images/Heart.svg"
import {ReactComponent as Cart} from "../images/Cart.svg"
import card_cake from "../images/card_cake.png"
import alex from '../images/products/alex.jpg'
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const SubCatalog = ()=> {
     const category = useParams().category

    const [filling, setFilling] = useState([]);
    const [kind, setKind] = useState([]);
    const [products, setProducts] = useState([]);

    const server_url = process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_SERVER_URL2

    useEffect(()=> {
        axios.get(server_url + "/" + category).then(response => {
            const products = response.data
            console.log(products)
            setFilling(products[0].filling)
            setKind(products[0].kind)
            setProducts(products[1])
        }).catch(error => {
            console.log(error)
        })

    }, [])
    

    const [value, setValue] = useState([1, 20000]);
    

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="font-I-Bold text-[30px] text-white mb-[40px]">{category == "cakes" ? "Торты" : category == "bakery" ? "Готовая выпечка" : category == "cookies" ? "Печенье" : category == "rolls" ? "Рулеты" : category == "pastrys" ? "Пирожные" : category == "themed_sweets" ? "Тематические сладости" : category == "baklavas" ? "Пахлава" : category == "donuts" ? "Пончики" : category == "macarons" ? "Макаруны" : category == "chocolates" ? "Шоколад" : "Конфеты"}</div>
            <div className="flex w-[1340px] h-min-[1000px] gap-[35px]">
                <div className="shadow-reg flex flex-col bg-white rounded-[12px] text-[#1D27A4] px-[15px] items-center w-[200px] min-h-[1014px] pt-[10px]">
                    <div className="font-I-Med text-[20px]">Фильтры</div>
                    <div className="flex flex-col w-full mt-[15px]">
                        <div className="font-I-Reg text-[16px] mb-[10px]">Цена</div>
                        <div className="flex justify-between mb-[25px]">
                            <div className="font-I-Med text-[14px]">{value[0]} ₽</div>
                            <div className="font-I-Med text-[14px]">{value[1]} ₽</div>
                        </div>
                        <div className="flex justify-center mb-[22px]">
                            <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            defaultValue={[1, 20000]}
                            min={1}
                            max={20000}
                            ariaLabel={['Lower thumb', 'Upper thumb']}
                            pearling
                            minDistance={100}
                            onChange={(value, index)=> setValue(value)}
                                        />
                        </div>
                           { kind.length > 0 &&
                            <>
                            <div className="font-I-Reg text-[16px] mb-[10px]">Вид</div>
                           <div className="flex flex-col gap-[15px] mb-[15px]">        
                               {
                                   kind.map((kind)=> {
                                       return (
                                           <div key={kind}>
                                           <label className="font-I-Reg text-[16px] checkbox">
                                           {kind}
                                           <input type="checkbox"/>
                                           <span></span>
                                           </label> 
                                       </div>   
                                       )})
                               }
                           </div>
                           </>
                           }
                        
                        <div className="font-I-Reg text-[16px] mb-[10px]">Начинка</div>
                        <div className="flex flex-col gap-[15px] mb-[25px]">
                            {
                                filling.map((filling)=> {
                                    return(
                                        <div key={filling}>
                                            <label className="font-I-Reg text-[16px] checkbox">
                                            {filling}
                                            <input type="checkbox"/>
                                            <span></span>
                                            </label> 
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button className="button flex items-center justify-center w-[170px] py-[5px] rounded-[30px] mb-[10px]">Показать</button>
                        <button className="button flex items-center justify-center w-[170px] py-[5px] rounded-[30px] mb-[40px]">Сбросить</button>
                    </div>
                </div>

                <div className="flex gap-x-[35px] gap-y-[30px] flex-wrap h-fit">

                    {
                        products.map((product)=>{
                            return(
                                <div key={product.name} className="card flex flex-col item-center w-[250px] h-[318px] pb-[20px]">
                                    <div className="relative">
                                        <Link to={"/catalog/" + category + "/" + product._id}><img src={require("../images/products" + product.images[0])} className="w-[250px] h-[168px] object-cover rounded-t-[12px]" /></Link>
                                        <Heart className="stroke-[#1D27A4] hover:fill-[#1D27A4] cursor-pointer absolute top-[15px] right-[15px]"/>
                                    </div>
                                    <div className="flex flex-col justify-between items-center h-full px-[15px] pt-[10px]">
                                        <div className="font-I-Reg text-[16px]">{product.name}</div>
                                        <div className="flex flex-col w-full">
                                            <div className="flex w-full gap-[10px] mb-[10px]">
                                                <div className="font-I-Med text-[14px]">{product.price} ₽</div>
                                                <div className="font-I-Reg text-[14px]">{product.weight > 1000 ? product.weight/1000 : product.weight} {product.weight > 1000 ? "кг" : "г"}</div>
                                            </div>   
                                            <button className="button rounded-[30px] w-[220px] py-[5px] flex items-center justify-center">
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
    )
}

export default SubCatalog;