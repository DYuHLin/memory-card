import React, {useState, useEffect} from "react";
import Grid from "./Piece/Grid";
import Score from "./Piece/Score";

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
           } else {
            setNewArray([...newArray, character]);
            setScore(score + 1);
           };

        
    };

    useEffect(() => {
        if(highScore < score){
            setHighScore(score);
        }
        
    }, [score, highScore]);

    return(
        <div className="body">
            <Score score = {score} highScore = {highScore} />
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