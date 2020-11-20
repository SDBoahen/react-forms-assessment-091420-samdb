import './App.css';
//import characters from './api.js'; 

import AnimeCharacters from './Containers/AnimeCharacters.js'; 

import Form from './Components/Form.js'; 


function App() {
  return (



    <div className="App">

      <div  className='Sam'>
            <h1>Yeoooo!</h1>
      </div>

      <div  className="Form">
            <Form />
      </div>

      <div  className='AnimeCharacters'>
            <AnimeCharacters />
      </div>

    </div>
  );
}

export default App;
