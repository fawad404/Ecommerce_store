import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {BrowserRouter as Main, Route, Routes, Navigate} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  //console.log(user);
  //const user = true;

  return (
    <Main>
      <Routes>
      <Route exact path='/' element={user ? <Home /> : <Login />}></Route>
      <Route exact path='/products/:category' element={user ? <ProductList /> : <Navigate to="/login" />}></Route>
      <Route exact path='/product/:id' element={user ? <Product /> : <Navigate to="/login" />}></Route>
      <Route exact path='/cart' element={user ? <Cart /> : <Navigate to="/login" />}></Route>
      <Route exact path='/login' element={!user ? <Login /> : <Navigate to="/" />}></Route>
      <Route exact path='/register' element={!user ? <Register /> : <Navigate to="/" />}></Route>
      </Routes>
    </Main>

  )
}

export default App
