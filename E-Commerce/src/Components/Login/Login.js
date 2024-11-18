import React,{useContext} from "react";
import { Container,Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginContext from "./Context/login-context";




const Login=()=>{

    const ctx=useContext(LoginContext)

    return(
    <React.Fragment>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
            <NavLink style={{color: 'white', textDecoration: 'none'}} to="/">Home</NavLink>
            {ctx.isLoggedin && <NavLink style={{color: 'white', textDecoration: 'none'}} to="/Store">Shop</NavLink>}
            <NavLink style={{color: 'white', textDecoration: 'none'}} to="/About">About Us</NavLink>
            <NavLink style={{color: 'white', textDecoration: 'none'}} to="/ContactUs">Contact Us</NavLink>
            <NavLink style={{color: 'white', textDecoration: 'none'}} to="/login">{ctx.isLoggedin ? 'Logout' : 'login'}</NavLink>
        </Container>
      </Navbar>
      <Navbar bg="secondary" variant="dark" className="mb-3" >
      <div style={{height: "15rem"}}>
          <h2 className="center-navbar" style={{marginLeft: '30rem',marginTop:'3rem'}}>The Generics</h2>
        </div>
      </Navbar>
      <LoginForm />
    </React.Fragment>
    )
}

export default Login
