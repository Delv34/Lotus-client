import React from "react";

const Modal = ({active, setActive, children})=> {
        if (active == true) document.body.style.overflow = "hidden"; else document.body.style.overflow = "scroll"

    return (
        <div className={active ? "modal active" : "modal"} onClick={()=> setActive(false)}>
            <div className="modal__content text-[#1D27A4] px-[40px]" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;