import React from "react";

const Score = (props) => {
    return (
        
        <div className="info">
            <div className="score">Score: {props.score}</div>
            <div className="score">High Score: {props.highScore}</div>
        </div>
        
    );
};

export default Score;