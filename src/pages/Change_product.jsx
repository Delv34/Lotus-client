import React, { useState } from "react";
import Select from 'react-select'
import {ReactComponent as Trash} from "../images/Trash.svg"
import {ReactComponent as Add_Image} from "../images/Add_Image.svg"
import {ReactComponent as Save} from "../images/Save.svg"

const Change_product = ()=> {

    const options = [
        { value: 'chocolate', label: 'Шоколад' },
        { value: 'strawberry', label: 'Клубника' },
        { value: 'vanilla', label: 'Ваниль' }
      ]

       const [img1, setImg1] = useState();
       const [img2, setImg2] = useState();
       const [img3, setImg3] = useState();
       const [selected, setSelected] = useState(1);
       const [name, setName] = useState("");
       const [price, setPrice] = useState("");
       const [weigth, setWeigth] = useState("");


    //         const [img, setImg] = useState()

    // function download(input) {
    //         if(input.files[0] != undefined) {
    //             let file = input.files[0];
    //             let reader = new FileReader();
    //             reader.readAsDataURL(file)
            
    
    //             reader.onload = function () {
    //                setImg(reader.result)
    //             }}}

      function download(input) {
        if(input.files[0] != undefined) {
            let file = input.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file)

            reader.onload = function () {
                if (img1 == undefined)
                    setImg1(reader.result)
                if (img1 != undefined && img2 == undefined)
                    setImg2(reader.result)
                if(img1 != undefined && img2 != undefined && img3 == undefined)
                    setImg3(reader.result)
                
            }
        }}


    return (
        <div className="flex justify-center">
            <div className="background white-block px-[30px] min-w-[940px] min-h-[460px]">
                <div className="flex flex-col items-center">
                    <div className="font-I-Bold text-[30px]">Товары</div>
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col">
                            <div className="flex mt-[40px] gap-[10px] mb-[30px]">
                                <div className="flex flex-col">
                                <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Категория</div>
                                <Select options={options} placeholder="Выберите категорию" classNamePrefix="custom-select"/>
                                </div>
                            </div>
                            <label className="flex items-center text-[#1D27A4] hover:text-[#3A49FF] gap-[10px] font-I-Med text-[20px] mb-[30px]">
                                <Add_Image className=" fill-[#1D27A4]" />
                                Добавить изображение
                                <input className="hidden" type="file" accept="image/png, image/jpeg" onChange={(event)=> download(event.target)} />
                            </label>
                            <div className="flex flex-col gap-[30px] ml-[20px] mb-[20px]">
                                <div className="flex items-center gap-[10px]">
                                    <div className={selected == 1 ? "product_image border-[#1D27A4]" : "product_image !border-[#8D96FF]"} onClick={()=> setSelected(1)}><img className="w-[220px] h-[148px] object-cover rounded-[12px]" src={img1} alt="" /></div>
                                    <Trash className="stroke-[#1D27A4] hover:fill-[#DFDFDF] cursor-pointer" onClick={()=> setImg1(undefined)}/>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className={selected == 2 ? "product_image border-[#1D27A4]" : "product_image !border-[#8D96FF]"} onClick={()=> setSelected(2)}><img className="w-[220px] h-[148px] object-cover rounded-[12px]" src={img2} alt="" /></div>
                                    <Trash className="stroke-[#1D27A4] hover:fill-[#DFDFDF] cursor-pointer" onClick={()=> setImg2(undefined)}/>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className={selected == 3 ? "product_image border-[#1D27A4]" : "product_image !border-[#8D96FF]"} onClick={()=> setSelected(3)}><img className="w-[220px] h-[148px] object-cover rounded-[12px]" src={img3} alt="" /></div>
                                    <Trash className="stroke-[#1D27A4] hover:fill-[#DFDFDF] cursor-pointer" onClick={()=> setImg3(undefined)}/>
                                </div>
                                <div className="font-I-Med text-[20px]">Выберите главное фото</div>
                            </div>
                            <div className="flex flex-col">
                            <div className="font-I-Reg text-[16px] mb-[10px]">Вид</div>
                        <div className="flex flex-col gap-[15px] mb-[15px]">
                            <div>
                                <label className="font-I-Reg text-[16px] checkbox">
                                Шоколадные
                                <input type="checkbox"/>
                                <span></span>
                                </label> 
                            </div>
                            <div>
                                <label className="font-I-Reg text-[16px] checkbox">
                                Бисквитные
                                <input type="checkbox"/>
                                <span></span>
                                </label> 
                            </div><div>
                                <label className="font-I-Reg text-[16px] checkbox">
                                Безе
                                <input type="checkbox"/>
                                <span></span>
                                </label> 
                            </div>
                            <div>
                                <label className="font-I-Reg text-[16px] checkbox">
                                Блинные
                                <input type="checkbox"/>
                                <span></span>
                                </label> 
                            </div>
                        </div>

                        <div className="font-I-Reg text-[16px] mb-[10px]">Начинка</div>
                        <div className="flex flex-col gap-[15px] mb-[25px]">
                            <div>
                                <label className="font-I-Reg text-[16px] checkbox">
                                Ягоды
                                <input type="checkbox"/>
                                <span></span>
                                </label> 
                            </div>
                            <div>
                                <label className="font-I-Reg text-[16px] checkbox">
                                Сгущенка
                                <input type="checkbox"/>
                                <span></span>
                                </label> 
                            </div><div>
                                <label className="font-I-Reg text-[16px] checkbox">
                                Шоколад
                                <input type="checkbox"/>
                                <span></span>
                                </label> 
                            </div>
                            <div>
                                <label className="font-I-Reg text-[16px] checkbox">
                                Джем
                                <input type="checkbox"/>
                                <span></span>
                                </label> 
                            </div>
                            <div>
                                <label className="font-I-Reg text-[16px] checkbox">
                                Фрукты
                                <input type="checkbox"/>
                                <span></span>
                                </label> 
                            </div>
                            <div>
                                <label className="font-I-Reg text-[16px] checkbox">
                                Орехи
                                <input type="checkbox"/>
                                <span></span>
                                </label> 
                            </div>
                            <div>
                                <label className="font-I-Reg text-[16px] checkbox">
                                Без добавок
                                <input type="checkbox"/>
                                <span></span>
                                </label> 
                            </div>
                        </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex flex-col items-center mb-[40px] ">
                            <img className="object-cover w-[220px] h-[148px] rounded-[12px] mb-[10px]" src={selected == 1  ? img1 : selected == 2 ? img2 : img3} alt="" />
                            <div className="flex flex-col px-[12px]">
                                <div className="font-I-Reg text-[16px] w-[196px] break-all mb-[10px]">{name}</div>
                                <div className="flex flex-col">
                                    <div className="flex w-full gap-[10px] mb-[10px]">
                                        <div className="font-I-Med text-[14px]">{price} ₽</div>
                                        <div className="font-I-Reg text-[14px]">{weigth} кг</div>
                                    </div>
                                </div>
                            </div>
                          </div>
                            <div className="flex gap-[10px] mb-[30px]">
                                <div className="flex flex-col">
                                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Наименование товара</div>
                                    <input type="text" defaultValue="" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[7px] pl-[15px] pr-[15px] w-[228px] font-I-Reg text-[14px] focus:outline-0" onChange={event => setName(event.target.value)} />
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Цена</div>
                                    <input type="text" defaultValue="" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[7px] pl-[15px] pr-[15px] w-[102px] font-I-Reg text-[14px] focus:outline-0" onChange={event => setPrice(event.target.value)} />
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Вес (в граммах)</div>
                                    <input type="text" defaultValue="" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[7px] pl-[15px] pr-[15px] w-[148px] font-I-Reg text-[14px] focus:outline-0" onChange={event => setWeigth(event.target.value)} />
                                </div>
                            </div>
                            <div className="font-I-Med text-[20px] w-full text-left mb-[15px]">Пищевая ценность на 100 г</div>
                            <div className="flex gap-[10px] mb-[20px]">
                                <div className="flex flex-col">
                                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Белки</div>
                                    <input type="text" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[7px] pl-[15px] pr-[15px] w-[90px] font-I-Reg text-[14px] focus:outline-0" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Жиры</div>
                                    <input type="text" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[7px] pl-[15px] pr-[15px] w-[90px] font-I-Reg text-[14px] focus:outline-0" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Углеводы</div>
                                    <input type="text" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[7px] pl-[15px] pr-[15px] w-[111px] font-I-Reg text-[14px] focus:outline-0" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Каллорийность</div>
                                    <input type="text" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[7px] pl-[15px] pr-[15px] w-[177px] font-I-Reg text-[14px] focus:outline-0" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-[15px] mb-[105px]">
                                <div className="flex flex-col">
                                <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Состав</div>
                                <textarea name="" id="" className="overflow-hidden resize-none border-[3px] border-[#8D96FF] rounded-[30px] py-[5px] pl-[15px] pr-[15px] w-[498px] h-[160px] font-I-Reg text-[14px] focus:outline-0"></textarea>
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Описание</div>
                                    <textarea name="" id="" className="overflow-hidden resize-none border-[3px] border-[#8D96FF] rounded-[30px] py-[5px] pl-[15px] pr-[15px] w-[498px] h-[160px] font-I-Reg text-[14px] focus:outline-0"></textarea>
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Условия хранения</div>
                                    <textarea name="" id="" className="overflow-hidden resize-none border-[3px] border-[#8D96FF] rounded-[30px] py-[5px] pl-[15px] pr-[15px] w-[498px] h-[160px] font-I-Reg text-[14px] focus:outline-0"></textarea>
                                </div>
                            </div>
                            <div className="flex w-full justify-start">
                               <button className="button rounded-[30px] w-[330px] py-[7px] flex items-center justify-center text-[20px]">
                                    <Save className="trash fill-white mr-[10px]"/>
                                    Сохранить изменения
                                </button> 
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Change_product;