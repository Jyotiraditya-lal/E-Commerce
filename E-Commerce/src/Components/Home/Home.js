import React,{useContext,useState} from "react";
import { Container, Navbar, Card, Button, Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import LoginContext from "../Login/Context/login-context";
import CartButton from "../Store/Cart/CartButton";
import Cart from "../Store/Cart/Cart";


const Home=()=>{

    const ctx=useContext(LoginContext)
    const navigate= useNavigate()
    const [ShowCart,setShowCart]=useState(false)


    let bttn;
    
    if(ctx.isLoggedin){
       bttn=<Button onClick={ctx.logout} variant="primary">Logout</Button>
    }else{
       bttn=<NavLink style={{color: 'white', textDecoration: 'none'}} to="/login">Login</NavLink>
    }

    const navigateToAlbums=()=>{
        navigate('/Store')
    }

    const StateChangeHandler=()=>{
        setShowCart(!ShowCart)
    }

    const BuyTickets=()=>{
        if(ctx.isLoggedin){
            alert('tickets bought successfully')
        }else{
            alert('Please login to continue your purchase')
        }
    }

    return(
     <React.Fragment>
       <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
            <NavLink style={{color: 'white', textDecoration: 'none'}} to="/">Home</NavLink>
            {ctx.isLoggedin && <NavLink style={{color: 'white', textDecoration: 'none'}} to="/Store">Shop</NavLink>}
            <NavLink style={{color: 'white', textDecoration: 'none'}} to="/About">About Us</NavLink>
            <NavLink style={{color: 'white', textDecoration: 'none'}} to="/ContactUs">Contact Us</NavLink>
            {ctx.isLoggedin && <CartButton onShow={StateChangeHandler} />}
            {bttn}
        </Container>
      </Navbar>
      <Navbar bg="secondary" variant="dark" className="mb-3" >
        <div style={{height: "15rem"}}>
          <h2 className="center-navbar" style={{marginLeft: '30rem',marginTop:'3rem'}}>The Generics</h2>
          {ctx.isLoggedin && <Button className="btn btn-dark" style={{marginLeft: '40rem',fontSize:'20px',marginTop:'10px'}} onClick={navigateToAlbums}>Go to Albums</Button>}
        </div>
      </Navbar>
      {ShowCart && <Cart onCancel={StateChangeHandler}/>}
      <Card style={{width: "60rem", marginLeft: '15rem',border: 'none'}}>
        <Card.Title style={{marginLeft: '25rem', fontFamily: "cursive",fontSize: '2rem'}}>Tours</Card.Title>
        <Card.Body>
            <Row  style={{marginTop: '20px'}} >
                <Col>
                    <p>July 16</p>
                </Col>
                <Col>
                    <p>DETROIT, MI</p>
                </Col>
                <Col> 
                    <p>DTE ENERGY MUSIC THEATRE</p>
                </Col>
                <Col>
                    <Button  style={{marginLeft: '50px'}} onClick={BuyTickets}>Buy Tickets</Button>
                </Col>
            </Row>
            <Row style={{marginTop: '20px'}} >
                <Col>
                    <p>July 19</p>
                </Col>
                <Col>
                    <p>TORONTO,ON</p>
                </Col>
                <Col> 
                    <p>BUDWEISER STAGE</p>
                </Col>
                <Col>
                    <Button  style={{marginLeft: '50px'}} onClick={BuyTickets}>Buy Tickets</Button>
                </Col>
            </Row>
            <Row style={{marginTop: '20px'}} >
                <Col>
                    <p>July 22</p>
                </Col>
                <Col>
                    <p>BRISTOW, VA</p>
                </Col>
                <Col> 
                    <p>JIGGY LUBE LIVE</p>
                </Col>
                <Col>
                    <Button  style={{marginLeft: '50px'}} onClick={BuyTickets}>Buy Tickets</Button>
                </Col>
            </Row>
            <Row style={{marginTop: '20px'}} >
                <Col>
                    <p>July 29</p>
                </Col>
                <Col>
                    <p>PHOENIX, AZ</p>
                </Col>
                <Col> 
                    <p>AK-CHIN PAVILION</p>
                </Col>
                <Col>
                    <Button  style={{marginLeft: '50px'}} onClick={BuyTickets}>Buy Tickets</Button>
                </Col>
            </Row>
            <Row style={{marginTop: '20px'}} >
                <Col>
                    <p>Aug 2</p>
                </Col>
                <Col>
                    <p>LAS VEGAS, NV</p>
                </Col>
                <Col> 
                    <p>T-MOBILE ARENA</p>
                </Col>
                <Col>
                    <Button  style={{marginLeft: '50px'}} onClick={BuyTickets}>Buy Tickets</Button>
                </Col>
            </Row>
            <Row style={{marginTop: '20px'}} >
                <Col>
                    <p>Aug 7</p>
                </Col>
                <Col>
                    <p>CONCORD, CA</p>
                </Col>
                <Col> 
                    <p>CONCORD PAVILION</p>
                </Col>
                <Col>
                    <Button  style={{marginLeft: '50px'}} onClick={BuyTickets}>Buy Tickets</Button>
                </Col>
            </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
    )
}

export default Home
