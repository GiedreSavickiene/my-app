
import './App.css';
import Bebras from './Components/001/Bebras';
import Briedis from './Components/001/Briedis';
import Kates from './Components/001/Kates';
import Meska from './Components/001/Meska';
import Miskas from './Components/001/Miskas';
import Vovere from './Components/001/Vovere';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <h1 style={
         {
           color: 'yellow',
           backgroundColor: 'gray'
           
         }
       }>Labas</h1>
       <Briedis></Briedis>
       <Meska></Meska>
       <Vovere></Vovere>
       <Kates></Kates>
       <Bebras></Bebras>
       <Miskas></Miskas>
       
       
      </header>
    </div>
  );
}

export default App;
