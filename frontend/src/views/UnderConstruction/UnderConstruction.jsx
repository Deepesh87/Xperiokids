import React from "react";
import style from "./UnderConstruction.module.css";


function UnderConstruction() {
  return <div className={style.main}>
     <div className={style.url}>
       <div>
         <p className={style.wlcm_text}>Welcome at</p>
         <div>
         <a href="#">google.com</a>
         </div>
       </div>
     </div>
     <div className={style.welcome_note}></div>
  </div>;
}

export default UnderConstruction;
