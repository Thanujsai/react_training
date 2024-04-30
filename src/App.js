import logo from './logo.svg';
import './App.css';
import Abc from './Arrowdemo'
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import {Button} from "antd";
// import Cake from './Components/Cake';
import CakeList from './Components/CakeList'

function App() {
  var name = "Thanuj Sai"
  console.log(name)
  return (
    <div className="App">
      <div>
      <Navbar />
      <label>{name}</label>
      <CakeList />
      {/* <Cake name="hi" cost="1000" image="https://flowera.in/wp-content/uploads/2023/05/Heart-Shape-Red-velvet-cake.jpg"/> */}
      <Home/>
      <Login />
        
        </div>
      {/* <input> */}{/*tags must be closed*/}
      {/* <input/> */}
      {/* <Abc /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;