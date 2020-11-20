import React from "react";


function Form(){

  return(<form onSubmit={(event)=> { event.preventDefault() 
    console.log('👀')
  }}>

    <input type="text" />    
    <input type="submit" value=":)" />    

  </form>)

}


export default Form