import React from "react";
import { Link } from "react-router-dom";

const Admin = ()=> {
    return (
        <div className="flex justify-center">
            <div className="background white-block px-[30px] min-w-[940px] min-h-[500px]">
                <div className="flex flex-col items-center">
                    <div className="font-I-Bold text-[30px] mb-[60px]">Админ-панель</div>
                    <div className="flex w-full justify-between">
                        <div className="flex flex-col gap-[30px] items-center">
                            <div className="font-I-Bold text-[20px] mb-[10px]">Товары</div>
                            <Link to="/create_product"><button className="button rounded-[30px] flex items-center justify-center w-[228px] py-[7px]">Добавить товар</button></Link>
                            <Link to="/change_product"><button className="button rounded-[30px] flex items-center justify-center w-[228px] py-[7px]">Изменить товар</button></Link>
                            <Link to="/delete_product"><button className="button rounded-[30px] flex items-center justify-center w-[228px] py-[7px]">Удалить товар</button></Link>
                        </div>
                        <div className="flex flex-col gap-[30px] items-center">
                            <div className="font-I-Bold text-[20px] mb-[10px]">Новости</div>
                            <Link to="/create_news"><button className="button rounded-[30px] flex items-center justify-center w-[228px] py-[7px]">Добавить новость</button></Link>
                            <Link to="/change_news"><button className="button rounded-[30px] flex items-center justify-center w-[228px] py-[7px]">Изменить новость</button></Link>
                            <Link to="/delete_news"><button className="button rounded-[30px] flex items-center justify-center w-[228px] py-[7px]">Удалить новость</button></Link>
                        </div>
                        <div className="flex flex-col gap-[30px] items-center">
                            <div className="font-I-Bold text-[20px] mb-[10px]">Обратная связь</div>
                            <Link to="/user_massages"><button className="button rounded-[30px] flex items-center justify-center w-[228px] py-[7px]">Сообщения <br /> пользователей</button></Link>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
        </div>
    )
}

export default Admin;