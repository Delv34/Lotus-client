import React, { useEffect, useState } from "react";
import ReactImageZoom from 'react-image-zoom'
import test_cake from "../images/test_cake.png"
import large_img from "../images/large_img.png"
import about1 from "../images/about1.png"
import about2 from "../images/about2.png"
import { ReactComponent as Heart} from "../images/Heart.svg"
import { ReactComponent as Cart } from "../images/Cart.svg"
import axios from "axios";
import { useParams } from "react-router-dom";

const Product = ()=> {

    const category = useParams().category
    const id = useParams().id

    const [product, setProduct] = useState([]);
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");

    const server_url = process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_SERVER_URL2

    useEffect(()=> {
        axios.get(server_url + "/" + category + "/" + id).then(response => {
            console.log(response)
            const product = response.data
            console.log(product.images[0])
            setProduct(product)
            setImg1(product.images[0])
            setImg2(product.images[1])
            setImg3(product.images[2])
        }).catch(error => {
            console.log(error)
        })

    }, [])
    
    const [selected, setSelected] = useState(1);

    const props = {width: 350, height: 230, zoomWidth: 350, img: selected == 1  ? "/products" + img1 : selected == 2 ? "/products" + img2 : "/products" + img3 , zoomPosition: "original"};

    return (
        <>
            <div className="background white-block flex flex-col items-center justify-center px-[30px]">
                <div className="flex gap-[50px] mb-[30px] justify-between">
                    <div className="flex flex-col gap-y-[20px]">
                        <div className="rounded-[8px] overflow-hidden">
                            <ReactImageZoom {...props} />   
                        </div>
                        <div className="flex gap-[25px]">
                            <img src={`/products${img1}`} alt="" className="w-[100px] rounded-[8px] h-[70px]" onClick={()=> setSelected(1)}/>
                            <img src={"/products" + img2} alt="" className="w-[100px] rounded-[8px] h-[70px]" onClick={()=> setSelected(2)}/>
                            <img src={"/products" + img3} alt="" className="w-[100px] rounded-[8px] h-[70px]" onClick={()=> setSelected(3)}/>
                        </div> 
                    </div>
                    <div className="flex flex-col justify-start">
                        <div className="font-I-Med text-[20px] mb-[15px]">{product.name}</div>
                        <div className="flex items-center mb-[25px] gap-[15px]">
                            <div className="font-I-Bold text-[20px]">{product.price} ₽</div>
                            <div className="font-I-Regular text-[16px]">{product.weight > 1000 ? product.weight/1000 : product.weight} {product.weight > 1000 ? "кг" : "г"}</div>
                        </div>
                        <div className="flex items-center mb-[30px] gap-[20px]">
                            <button className="button rounded-[30px] px-[33px] py-[5px] flex items-center justify-center text-[16px]">
                                <Cart className="cart stroke-white mr-[10px]"/>
                                В корзину
                            </button>
                            <Heart className="stroke-[#1D27A4] hover:fill-[#1D27A4] cursor-pointer"/>
                        </div>
                        <div className="font-I-Med text-[16px] mb-[15px]">Пищевая ценность на 100 г</div>
                        <div className="flex gap-[25px]">
                            <div className="flex flex-col gap-[5px] justify-start">
                                <div className="font-I-Bold text-[14px]">Белки</div>
                                <div className="font-I-Reg text-[16px]">{product.proteins} г</div>
                            </div>
                            <div className="flex flex-col gap-[5px] justify-start">
                                <div className="font-I-Bold text-[14px]">Жиры</div>
                                <div className="font-I-Reg text-[16px]">{product.fats} г</div>
                            </div>
                            <div className="flex flex-col gap-[5px] justify-start">
                                <div className="font-I-Bold text-[14px]">Углеводы</div>
                                <div className="font-I-Reg text-[16px]">{product.carbohydrates} г</div>
                            </div>
                            <div className="flex flex-col gap-[5px] justify-start">
                                <div className="font-I-Bold text-[14px]">Каллорийность</div>
                                <div className="font-I-Reg text-[16px]">{product.calories} ккал</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full justify-start">
                    <div className="font-I-Bold text-[16px] mb-[10px]">Состав</div>
                    <div className="font-I-Reg text-[14px] max-w-[686px] mb-[25px]">{product.composition}</div>
                    <div className="font-I-Bold text-[16px] mb-[10px]">Описание</div>
                    <div className="font-I-Reg text-[14px] max-w-[686px] mb-[25px]">{product.description}</div>
                    <div className="font-I-Bold text-[16px] mb-[10px]">Условия хранения</div>
                    <div className="font-I-Reg text-[14px] max-w-[686px]">{product.storage_conditions} <br /> {product.best_conditions}</div>
                </div>
                
            </div>
        </>
    )
}

export default Product;