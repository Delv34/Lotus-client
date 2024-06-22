import React from "react";

const User_massages = ()=> {
    return (
        <div className="flex justify-center">
            <div className="background white-block px-[30px] min-w-[940px] min-h-[528px]">
                <div className="flex flex-col items-center">
                    <div className="font-I-Bold text-[30px] mb-[40px]">Обратная связь</div>
                        <div className="flex mb-[25px] w-full">
                            <div className="flex flex-col">
                                <div className="font-I-Med text-[16px] ml-[5px] mb-[5px]">Дата</div>
                                <input type="text" defaultValue="" className="border-[3px] border-[#8D96FF] rounded-[30px] py-[7px] pl-[15px] pr-[15px] w-[95px] font-I-Reg text-[14px] focus:outline-0" />
                            </div>  
                        </div>
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col">
                                <div className="flex justify-between mb-[15px]">
                                    <div className="font-I-Med text-[16px]">aidanlovess13@mail.ru</div>
                                    <div className="font-I-Med text-[16px]">29 мая</div>
                                </div>  
                                <div className="font-I-Reg text-[16px] max-w-[880px] break-all">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit a</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex justify-between mb-[15px]">
                                    <div className="font-I-Med text-[16px]">aidanlovess13@mail.ru</div>
                                    <div className="font-I-Med text-[16px]">29 мая</div>
                                </div>  
                                <div className="font-I-Reg text-[16px] max-w-[880px] break-all">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit a</div>
                            </div>
                            
                        </div>     
                </div>
            </div>
        </div>
    )
}

export default User_massages;