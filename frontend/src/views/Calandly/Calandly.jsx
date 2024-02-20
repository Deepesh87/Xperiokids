import React, { useEffect } from "react";
import {RotatingLines} from "react-loader-spinner";


function Calandly() {
    useEffect(()=>{
      window.location.href = "https://calendly.com/imsinghshivendra/30min"
    },[])
  return <div style={{height:"100vh", width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
    <RotatingLines
  visible={true}
  height="96"
  width="96"
  color="grey"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  </div>
}

export default Calandly;
