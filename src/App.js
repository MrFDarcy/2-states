import { useState } from "react";
import AnimalShow from "./AnimalShow";

import './App.css';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'dog', 'horse', 'cow', 'gator']
    const animal = animals[Math.floor(Math.random() * animals.length)];
    return animal;
}



function App() {


    const [animal, setAnimal] = useState([])


    const handleClick = () => {
        setAnimal([...animal, getRandomAnimal()])
    };


    const renderedAnimals = animal.map((animal, index) => {
        return <AnimalShow key={index} type={animal} />
    });

    return (
        <div className="App">
            <button onClick={handleClick}>Add Animal</button>

            <div className="animal-list">{renderedAnimals}</div>
        </div>
    );
}


export default App;