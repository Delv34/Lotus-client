import React from "react";
import about1 from "../images/about1.png"
import about2 from "../images/about2.png"
import about3 from "../images/about3.png"

const About = ()=> {
    return (
        <div className="flex justify-center">
            <div className="background white-block px-[30px] min-w-[940px] min-h-[1410px]">
                <div className="flex flex-col items-center">
                    <div className="font-I-Bold text-[30px] mb-[40px]">О нас</div>
                    <div className="flex justify-between w-full mb-[40px]">
                        <div className=" flex flex-col justify-start gap-[10px] font-I-Med test-[16px] max-w-[330px] max-h-[658px]">
                        <div>Мы - команда страстных кондитеров, и наша цель - радовать вас великолепными, роскошными десертами.</div>
                        <div>Наша история началась в далеком 2005 году, когда наши основатели решили объединить свою любовь к качественным ингредиентам, креативности и безграничному воображению.</div>
                        <div>С тех пор мы стали одним из ведущих производителей и поставщиков высококачественных кондитерских изделий на рынке.</div>
                        <div>В нашей кондитерской мы соблюдаем высокие стандарты качества, используем только лучшие ингредиенты и постоянно разрабатываем новые уникальные рецепты.</div>
                        <div>Мы гордимся нашими традициями и стремимся удивлять вас каждым новым пробуждением ваших вкусовых рецепторов.</div>
                        <div>Присоединяйтесь к нам на пути к сладкому совершенству!</div>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <img src={about1} alt="" />
                            <img src={about2} alt="" />
                        </div>
                    </div>
                    <div className="font-I-Bold text-[30px] mb-[30px]">Наша команда</div>
                    <img src={about3} alt="" />  
                </div>
            </div>
        </div>
    )
}

export default About;