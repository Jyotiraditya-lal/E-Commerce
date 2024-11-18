import React,{useState,useContext} from "react";
import {Container, Navbar, Button} from "react-bootstrap"
import Products from "./Products/Products";
import './Store.css'
import Cart from "./Cart/Cart";
import ContextProvider from "./Context/ContextProvider";
import CartButton from "./Cart/CartButton";
import { NavLink } from "react-router-dom";
import LoginContext from "../Login/Context/login-context";
import Merch from './Products/Merch'


const Store=()=>{

  const [ShowCart,setShowCart]=useState(false)
  const ctx=useContext(LoginContext)

  const StateChangeHandler=()=>{
    setShowCart(!ShowCart)
  }

  let bttn;
    
    if(ctx.isLoggedin){
       bttn=<Button onClick={ctx.logout} variant="primary">Logout</Button>
    }else{
       bttn=<NavLink style={{color: 'white',textDecoration: 'none'}} to="/login">Login</NavLink>
    }

  return(
    <ContextProvider>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
            <NavLink style={{color: 'white',textDecoration: 'none'}} to="/">Home</NavLink>
            <NavLink style={{color: 'white',textDecoration: 'none'}} to="/Store">Shop</NavLink>
            <NavLink style={{color: 'white',textDecoration: 'none'}} to="/About">About Us</NavLink>
            <NavLink style={{color: 'white',textDecoration: 'none'}} to="/ContactUs">Contact Us</NavLink>
            <CartButton onShow={StateChangeHandler} />
            {bttn}
        </Container>
      </Navbar>
      <div >
      <Navbar bg="secondary" variant="dark" className="mb-3" >
      <div style={{height: "15rem"}}>
        <h2 className="center-navbar" style={{marginLeft: '30rem',marginTop:'3rem'}}>The Generics</h2>
      </div>
      </Navbar>
      </div>
      {ShowCart && <Cart onCancel={StateChangeHandler}/>}
      <p style={{fontFamily: "cursive", fontSize: "50px", textAlign: "center"}}>Music</p>
      <Products />
      <p style={{fontFamily: "cursive", fontSize: "50px", textAlign: "center"}}>Merch</p>
      <Merch />
    </ContextProvider>
  )
}

export default Store
