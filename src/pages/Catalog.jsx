import React from "react";
import axios from "axios"
import cakes from "../images/cakes.png"
import bakerys from "../images/bakerys.png"
import cookies from "../images/cookies.png"
import rolls from "../images/rolls.png"
import pastries from "../images/pastries.png"
import sweets from "../images/sweets.png"
import baklavas from "../images/baklavas.png"
import donuts from "../images/donuts.png"
import macarons from "../images/macarons.png"
import chocolates from "../images/chocolates.png"
import gingerbreads from "../images/gingerbreads.png"
import candys from "../images/candys.png"
import { Link, useParams } from "react-router-dom";

const Catalog = ()=> {

    return (
        <>
        <div className="flex flex-col items-center justify-center">
            <div className="font-I-Bold text-[30px] text-white mb-[40px]">Каталог</div>
            <div className="flex flex-wrap gap-x-[40px] gap-y-[50px] max-w-[1400px]">
                <Link to="/catalog/cakes">
                <div className="catalog flex flex-col items-center justify-between pt-[20px] pb-[15px]">
                    <img src={cakes} alt=""/>
                    <div className="font-I-Med text-[24px]">Торты</div>
                </div>
                </Link>
                <Link to="/catalog/bakery">
                <div className="catalog flex flex-col items-center justify-between text-center pt-[20px] pb-[15px]">
                    <img src={bakerys} alt=""/>
                    <div className="font-I-Med text-[24px]">Готовая выпечка</div>
                </div>
                </Link>
                <Link to="/catalog/cookies">
                <div className="catalog flex flex-col items-center justify-between pt-[30px] pb-[15px]">
                    <img src={cookies} alt=""/>
                    <div className="font-I-Med text-[24px]">Печенье</div>
                </div>
                </Link>
                <Link to="/catalog/rolls">
                <div className="catalog flex flex-col items-center justify-between pt-[20px] pb-[15px]">
                    <img src={rolls} alt=""/>
                    <div className="font-I-Med text-[24px]">Рулеты</div>
                </div>
                </Link>
                <Link to="/catalog/pastrys">
                <div className="catalog flex flex-col items-center justify-between pt-[20px] pb-[15px]">
                    <img src={pastries} alt=""/>
                    <div className="font-I-Med text-[24px]">Пирожные</div>
                </div>
                </Link>
                <Link to="/catalog/themed_sweets">
                <div className="catalog flex flex-col items-center justify-between text-center pt-[12px] pb-[15px]">
                    <img src={sweets} alt=""/>
                    <div className="font-I-Med text-[24px]">Тематические сладости</div>
                </div>
                </Link>
                <Link to="/catalog/baklavas">
                <div className="catalog flex flex-col items-center justify-between pt-[20px] pb-[15px]">
                    <img src={baklavas} alt=""/>
                    <div className="font-I-Med text-[24px]">Пахлава</div>
                </div>
                </Link>
                <Link to="/catalog/donuts">
                <div className="catalog flex flex-col items-center justify-between pt-[20px] pb-[15px]">
                    <img src={donuts} alt=""/>
                    <div className="font-I-Med text-[24px]">Пончики</div>
                </div>
                </Link>
                <Link to="/catalog/macarons">
                <div className="catalog flex flex-col items-center justify-between pt-[20px] pb-[15px]">
                    <img src={macarons} alt=""/>
                    <div className="font-I-Med text-[24px]">Макаруны</div>
                </div>
                </Link>
                <Link to="/catalog/chocolates">
                <div className="catalog flex flex-col items-center justify-between pt-[20px] pb-[15px]">
                    <img src={chocolates} alt=""/>
                    <div className="font-I-Med text-[24px]">Шоколад</div>
                </div>
                </Link>
                <Link to="/catalog/gingerbreads">
                <div className="catalog flex flex-col items-center justify-between pt-[20px] pb-[15px]">
                    <img src={gingerbreads} alt=""/>
                    <div className="font-I-Med text-[24px]">Пряники</div>
                </div>
                </Link>
                <Link to="/catalog/candys">
                <div className="catalog flex flex-col items-center justify-between pt-[20px] pb-[15px]">
                    <img src={candys} alt=""/>
                    <div className="font-I-Med text-[24px]">Конфеты</div>
                </div>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Catalog;