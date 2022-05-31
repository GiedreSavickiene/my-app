import './App.css';
import Car from './Components/002/Car';
import Squer from './Components/002/Squer';
import Tree from './Components/002/Tree'
import rand from './Funkcijos/rand';
import randColor from './Funkcijos/randColor';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <h1>PROPS</h1>
       <Car price={2000} markSize='10' mark='red' maker='Opel' color='blue' size='25' font='Arial'></Car>
       <Car price={5000} markSize="40"  mark='yellow'maker='Volvo' color='dark red' size='30' font='Calibric'></Car>
       <Car price={4000} markSize='23' mark='green' maker='MB' color='silver' size='20' font='Sanserif'></Car>
          <Tree size={8}></Tree>
          <Tree size={1}></Tree>
          <Tree size={5}></Tree>
        <Squer color={ randColor()} size={rand(50, 300)}></Squer>
        <Squer color={ randColor()} size={rand(50, 300)}></Squer>
        <Squer color={ randColor()} size={rand(50, 300)}></Squer>
        <Squer color={ randColor()} size={rand(50, 300)}></Squer>
        <Squer color={ randColor()} size={rand(50, 300)}></Squer>
        
       
      </header>
    </div>
  );
}

export default App;
