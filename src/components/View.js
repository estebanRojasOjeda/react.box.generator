import React, { useState } from "react";
import style from "./view.module.css";

const View = (props) => {
    const { box } = props;

    return(
        <>
            <h1>Cajas</h1>
            <div className={style.container}>
                {
                    box.map((el, i)=>
                        <div key={i} className={style.box} style={{backgroundColor:el}}></div>
                    )
                }
            </div>
        </>
    );
}

export default View;

/***
 * <div key={i} style={{backgroundColor: item}} className={style.box}>
                            <p>{box[i]}</p>
                        </div>
 */