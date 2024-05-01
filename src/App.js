import logo from './logo.svg';
import './App.css';
import Abc from './Arrowdemo'
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import {Button} from "antd";
import Cake from './Components/Cake';
import CakeList from './Components/CakeList';
import Slide from './Components/Carousel';
import UsersList from './Components/UsersList';
import Users from './Components/Users';
import Datatable from './Components/Datatable';
import Signup from './Components/Signup';

function App() {
  var name = "Thanuj Sai"
  console.log(name)
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      // address: '10 Downing Street',
    },
    {
      key: '3',
      name: 'Chillar',
      // age: 42,
      // address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <div className="App">
      <div>
      <Navbar />
      {/* <label>{name}</label> */}
      <Slide />
      <CakeList />
      <UsersList />
      <Datatable data={dataSource}/>
      {console.log("hey")}
      <Users />
      <Signup />
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