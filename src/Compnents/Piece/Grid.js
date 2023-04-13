import React from "react";

const Grid = (props) => {

    return (
        <>
                    <div className="card" >
                        <div key={props.character} onClick={() => props.game(props.character)} className="character">
                            <img src={`./Assets/Pics/${props.character}.jpg`} alt={props.character}></img>
                        </div>
                        <div className="character-name">
                            {props.character}
                        </div>
                    </div>
        </>
    );
};

export default Grid;