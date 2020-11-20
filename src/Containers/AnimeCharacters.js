import React from "react";
import characters from "../api";

// import characters from '../api.js'; 


class AnimeCharacters extends React.Component {

  state = { characters: characters }
    

  listOfChars =()=> {
    //return console.log("Naruto!")
  return characters.map(char => <AnimeCharacter name={char.name} img={char.img} />)
//   key={char.id} 
  }
  
  render() {
        return (
        <div className="index">
            <h1>Anime Characters</h1>
            {this.listOfChars()}
        </div>
        );
    }
}

    
export default AnimeCharacters; 