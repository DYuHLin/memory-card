import React, {useState} from "react";

const Main = () => {
    const pics = ["catherine.jpg", "elizabeth.jpg", "gin.jpg", "hijikata.jpg", "kagura.jpg", "kondo.png", "madao.jpg", "okita.png", "otae.jpg",
                  "otose.jpg", "princehata.jpg", "sadaharu.jpg", "shin.jpg", "shoyo.jpg", "takasugi.jpg", "tama.png", "tsukuyo.jpg", "zura.jpg",
                  "yamazaki.png", "sakamoto.jpg"];
    const [picArray, setPicArray] = useState(pics);

    return(
        <div className="body">
            <div className="info">

            </div>
            <div className="main">

            </div>
        </div>
    );
};

export default Main;