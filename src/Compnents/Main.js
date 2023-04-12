import React, {useState} from "react";

const Main = () => {
    const pics = ["catherine", "elizabeth", "gin", "hijikata", "kagura", "kondo", "madao", "okita", "otae",
                  "otose", "princehata", "sadaharu", "shin", "shoyo", "takasugi", "tama", "tsukuyo", "zura",
                  "yamazaki", "sakamoto"];

    const [picArray, setPicArray] = useState(pics);

    return(
        <div className="body">
            <div className="info">

            </div>
            <div className="main">
                <div className="card">
                    <div className="character">
                        <img src="./Assets/Pics/gin.jpg"></img>
                    </div>
                    <div className="character-name">
                        Gintoki
                    </div>
                </div>

                <div className="card">
                    <div className="character">

                    </div>
                    <div className="character-name">
                        
                    </div>
                </div>

                <div className="card">
                    <div className="character">

                    </div>
                    <div className="character-name">
                        
                    </div>
                </div>

                <div className="card">
                    <div className="character">

                    </div>
                    <div className="character-name">
                        
                    </div>
                </div>

                <div className="card">
                    <div className="character">

                    </div>
                    <div className="character-name">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;