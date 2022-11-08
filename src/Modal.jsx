import { ImageNotSupported } from "@mui/icons-material";
import React, {useState} from "react";

const Modal =({open,onClose})=>{

    if(!open) return null

    return(
        <div onClick={onClose} className="overlay">
            <div onClick={(e)=>{e.stopPropagation()}}
             className="modalContainer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZeCSFVv8IXUOBrruWnmV-DhmomgEhK9sUg&usqp=CAU"  />

                <div className="modalRight">
                    <p className="closeBtn" onClick={onClose}>close</p>
                    <div className="content">
                        <p>Modal con reactJs</p>
                        <h1>Lenguajes de Programacion</h1>
                    </div>
                    <div className="btnContainer">
                        <button onClick={onClose} className="btnPrimary">
                            <span className="bold">Cerrar</span>
                        </button>
                        <button onClick={onClose} className="btnPrimary">
                            <span className="bold">Next</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal