import { Link } from "react-router-dom";
import RANDOM_FRUITS from "../randomFruits";


function RandomFruit() {

    function getRandomFruitElement(){
        const keys = Object.keys(RANDOM_FRUITS)
        const randomIdx = Math.floor(Math.random() * keys.length)
        const randomFruitName = keys[randomIdx]
        const randomFruit = RANDOM_FRUITS[randomFruitName]
        return(

            <div>
                <h1>{randomFruitName}</h1>
                <h1>{randomFruit.image}</h1>
                <p>{randomFruit.description}</p>
            </div>
        )
    }

    return (
        <div>
            {getRandomFruitElement()}
            <Link to="/"> Go Back </Link>
        </div>
    )

}

export default RandomFruit;