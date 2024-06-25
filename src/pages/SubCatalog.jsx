import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import {ReactComponent as Heart} from "../images/Heart.svg"
import {ReactComponent as Cart} from "../images/Cart.svg"
import {ReactComponent as Trash} from "../images/Trash.svg"
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useCartStore, useFavoriteStore } from "../store";

const SubCatalog = ()=> {
     const category = useParams().category

    const [filling, setFilling] = useState([]);
    const [kind, setKind] = useState([]);
    const [products, setProducts] = useState([]);
    const [id, setId] = useState("")
    const [idCart, setIdCart] = useState("")

    const [isAdd, setIsAdd] = useState(false)
    const [isFav, setIsFav] = useState(false)

    let favorites = []
    if (JSON.parse(localStorage.getItem('favorites')) != null) {
        favorites = JSON.parse(localStorage.getItem('favorites'))
    }
    let cart = [] 
    if (JSON.parse(localStorage.getItem('cart')) != null) {
        cart = JSON.parse(localStorage.getItem('cart'))
    }

    // const addFavorites = useFavoriteStore((state)=> state.addFavorites)
    // const delFavorites = useFavoriteStore((state)=> state.delFavorites)
    // const getFavorites = useFavoriteStore((state)=> state.getFavorites)
    // getFavorites(idFav)
    // const isFavorites = useFavoriteStore((state)=> state.isFav)

    // const addCart = useCartStore((state)=> state.addCart)
    // const delCart = useCartStore((state)=> state.delCart)
    // const getCart = useCartStore((state)=> state.getCart)
    // const cart = useCartStore((state)=> state.cart)
    // getCart(idCart)
    // const isCart = useCartStore((state)=> state.isCart)



    const getCart = item => cart.find(i => i._id == item._id)
    const delCart = cart.filter(i => i._id !== id);
    const getFavorite = item => favorites.find(i => i._id == item._id) 
    const delFavorite = favorites.filter(i => i._id !== id);

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

                                        {/* Добавление в избранное */}

                                        {
                                            getFavorite(product) ?
                                            <Heart onClick={()=>{
                                                // delFavorites(product)
                                                localStorage.setItem("favorites", JSON.stringify(delFavorite))
                                                setIsFav(false)
                                            }} className="stroke-[#1D27A4] fill-[#1D27A4] cursor-pointer absolute top-[15px] right-[15px]"/>
                                            : <Heart onClick={()=>{
                                                // addFavorites(product)
                                                favorites.push(product)
                                                localStorage.setItem("favorites", JSON.stringify(favorites))
                                                setId(product._id)
                                                setIsFav(true)
                                            }} className="stroke-[#1D27A4] hover:fill-[#1D27A4] cursor-pointer absolute top-[15px] right-[15px]"/>
                                        }
                                    </div>
                                    <div className="flex flex-col justify-between items-center h-full px-[15px] pt-[10px]">
                                        <div className="font-I-Reg text-[16px]">{product.name}</div>
                                        <div className="flex flex-col w-full">
                                            <div className="flex w-full gap-[10px] mb-[10px]">
                                                <div className="font-I-Med text-[14px]">{product.price} ₽</div>
                                                <div className="font-I-Reg text-[14px]">{product.weight > 1000 ? product.weight/1000 : product.weight} {product.weight > 1000 ? "кг" : "г"}</div>
                                            </div>

                                                {/* Добавление в корзину */}

                                            {
                                                getCart(product) ? <button onClick={()=> {
                                                    // delCart(product)
                                                    localStorage.setItem("cart", JSON.stringify(delCart))
                                                    setIsAdd(false)
                                                }} className="button rounded-[30px] w-[220px] py-[5px] flex items-center justify-center">
                                                <Trash className="cart stroke-white mr-[10px]"/>
                                                <div className="text-[16px]">Удалить</div>
                                            </button> : <button onClick={()=> {
                                                    // addCart(product)
                                                    cart.push(product)
                                                    localStorage.setItem("cart", JSON.stringify(cart))
                                                    // console.log("Проверка на начилие", getCart(product._id))
                                                    getCart(product)
                                                    // console.log("Содержимое массива",cart)
                                                    setId(product._id)
                                                    setIsAdd(true)
                                                }} className="button rounded-[30px] w-[220px] py-[5px] flex items-center justify-center">
                                                <Cart className="cart stroke-white mr-[10px]"/>
                                                <div className="text-[16px]">В корзину</div>
                                            </button>
                                            }   
                                            
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