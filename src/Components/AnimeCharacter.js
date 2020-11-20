import React, { createElement } from "react";


function AnimeCharacter(props) {

  console.log(props)
  return (<div className="card">
            <span className="display-char">
                <h2 >{ props.name }</h2>
                <img alt="" src={ props.img } />
            </span>
          </div>);
}


export default AnimeCharacter;
