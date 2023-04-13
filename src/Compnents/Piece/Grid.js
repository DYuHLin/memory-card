import React from "react";

const Grid = (props) => {

    return (
        <>
        <div key={props.character} className="card" onClick={() => props.game(props.character)}>
                        <div className="character">
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