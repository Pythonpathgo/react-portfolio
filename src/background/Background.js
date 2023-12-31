import React from "react";
import "../Styles/background.css";
import video from "../assets/bg-universe.mp4";
import fallbackImage from "../assets/fallback-image.png";

/*adding the shadow to the image on the screen when it moves*/
const Background = () => {
   return(
    <>
    <div className="shadow-overlay"></div>
    <video 
    playsInline 
    autoPlay 
    muted 
    loop
    preloop="auto" 
    id="bg" 
    poster={fallbackImage}
    >
     <source src={video} type="video/mp4" />
     </video>
    </>
   ); 
};
export default Background;