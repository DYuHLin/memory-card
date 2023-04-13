import React, {useState, useEffect} from "react";
import Grid from "./Piece/Grid";

const Main = () => {
    const pics = ["catherine", "elizabeth", "gin", "hijikata", "kagura", "kondo", "madao", "okita", "otae",
                  "otose", "princehata", "sadaharu", "shin", "shoyo", "takasugi", "tama", "tsukuyo", "zura",
                  "yamazaki", "sakamoto"];

    const [picArray, setPicArray] = useState(pics);
    const [newArray, setNewArray] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const shuffleArray = (array) => {
        array.sort((a,b) => 0.5 - Math.random()); 

        return array;
    };

    const game = (character) => {
           if(newArray.includes(character)){
                setNewArray([]);
                setScore(0);
                console.log(score);
                console.log(newArray);
           } else {
            setNewArray([...newArray, character]);
            setScore(score + 1);
            console.log(score);
            console.log(newArray);
           };

        
    };

    useEffect(() => {
        if(highScore < score){
            setHighScore(score);
        }
        
    }, [score, highScore]);

    console.log(picArray);
    return(
        <div className="body">
            <div className="info">
            <div className="score">Score: {score}</div>
            <div className="score">High Score: {highScore}</div>
            </div>
            <div className="main">
            
                {shuffleArray(picArray).map((pic, id) => {
                    return (
                        <>
                            <Grid character = {pic} game = {(character) => game(character)} />
                        </>
                    )
                })}

            </div>
        </div>
    );
};

export default Main;