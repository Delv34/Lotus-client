import React, { useState } from "react";
import {ReactComponent as Add_Image} from "../images/Add_Image.svg";
import {ReactComponent as Add} from "../images/Add.svg";
import {ReactComponent as Trash} from "../images/Trash.svg";



const Create_news = ()=> { 

    const [img1, setImg1] = useState();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const day = new Date().getDate();
    const mouth = ( "0" + (new Date().getMonth() + 1));
    const year = String(new Date().getFullYear()).substring(2)

    function download(input) {
        if(input.files[0] != undefined) {
            let file = input.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file)

            reader.onload = function () {
                    setImg1(reader.result)
            }
        }}

    return (
        <div className="flex justify-center">
            <div className="background white-block px-[30px] min-w-[940px] min-h-[460px]">
                <div className="flex flex-col items-center">
                    <div className="font-I-Bold text-[30px]">Товары</div>
                    <div className="flex w-full justify-between">
                        <div className="flex flex-col">
                            <div className="flex mb-[40px]">
                                <div className="flex flex-col">
                                    <label className="flex items-center text-[#1D27A4] hover:text-[#3A49FF] gap-[10px] font-I-Med text-[20px] mb-[30px]">
                                        <Add_Image className=" fill-[#1D27A4]" />
                                        Добавить изображение
                                        <input className="hidden" type="file" accept="image/png, image/jpeg" onChange={(event)=> download(event.target)} />
                                    </label>
                                    <div className="flex items-center gap-[10px] ml-[20px] mb-[20px]">
                                        <div className="product_image border-[#1D27A4]"><img className="w-[220px] h-[148px] object-cover rounded-[12px]" src={img1} alt="" /></div>
                                        <Trash className="stroke-[#1D27A4] hover:fill-[#DFDFDF] cursor-pointer" onClick={()=> setImg1(undefined)}/>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-[38px] mt-[38px]">
                                    <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Название статьи</div>
                                    <input maxLength="18" type="text" defaultValue="" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[7px] pl-[15px] pr-[15px] w-[228px] font-I-Reg text-[14px] focus:outline-0" onChange={event => setName(event.target.value)} />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Краткое описание статьи</div>
                                <textarea maxLength="151" name="" id="" className="overflow-hidden resize-none border-[3px] border-[#8D96FF] rounded-[30px] py-[5px] pl-[15px] pr-[15px] w-[498px] h-[160px] font-I-Reg text-[14px] focus:outline-0" onChange={event => setDescription(event.target.value)}></textarea>
                            </div>
                        </div>
                        
                        <div className="flex flex-col items-end">
                            <div className="flex flex-col items-center w-[220px] h-[441px] mb-[40px]">
                              <div className="font-I-Reg text-[16px] mb-[5px]">{day + "." + mouth + "." + year}</div>
                              <div className="font-I-Bold text-[20px] mb-[10px]">{name}</div>
                              <img className="mb-[10px] object-cover w-[220px] h-[235px] rounded-[12px]" src={img1} alt="" />
                              <div className="font-I-Reg text-[14px] px-[10px] break-all">{description}</div>
                            </div>
                            <button className="button rounded-[30px] w-[269px] py-[7px] flex items-center justify-center text-[20px]">
                                <Add className="add stroke-white mr-[10px]"/>
                                Создать новость
                            </button> 
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Create_news;