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
import Meeting from './Components/Meeting';
import Attendance from './Components/Attendance';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Routing from './Components/Routing';
import Loginn from './Components/Loginn';
import Forgot from './Components/Forgot';
import Signupp from './Components/Signupp';
import ChangePassword from './Components/ChangePassword';
import Navigation from './Components/Navigation';
import Success from './Components/Success';
import Edit from './Components/Edit';
import { useState } from 'react';
import { users } from "./Components/data";
import Admin from './Components/Admin';
import TryNavigate from './Components/TryNavigate';
import Bakery from './Components/Bakery';
import CakeDetail from './Components/CakeDetail';
import Cart from './Components/Cart';
import Search from './Components/Search';

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
      {/* <Navbar /> */}
      {/* <Attendance /> */}
      {/* <label>{name}</label> */}
      {/* <Routing /> */}
      {/* <Navigation /> */}
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Loginn/>}></Route>
          <Route path='/signup' element={<Signupp/>}></Route>
          <Route path='/forgot' element={<Forgot/>}></Route>
          <Route path='/changepassword' element={<ChangePassword />}></Route>
          <Route path='/success' element={<Success />}></Route>
          <Route path='/edit' element={<Edit />}></Route>
          <Route path='/navigate' element={<TryNavigate />}></Route>
          <Route path='/cakeDetail/:name' element={<CakeDetail />}></Route>
          <Route path='/bakery' element={<Bakery />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/search' element={<Search />}></Route>
          
        </Routes>
      </BrowserRouter>
      {/* <Slide />
      <Meeting />
      <CakeList />
      <UsersList />
      <Datatable data={dataSource}/>
      {console.log("hey")}
      <Users />
      <Signup /> */}
      {/* <Cake name="hi" cost="1000" image="https://flowera.in/wp-content/uploads/2023/05/Heart-Shape-Red-velvet-cake.jpg"/> */}
      {/* <Home/>
      <Login /> */}
        
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