import React, { useContext,useState } from "react";
import LoginContext from "../Login/Context/login-context";
import { Container, Navbar, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import CartButton from "../Store/Cart/CartButton";
import Cart from "../Store/Cart/Cart";

const About = () => {
  const ctx = useContext(LoginContext);
  const navigate = useNavigate();
  const [ShowCart,setShowCart]=useState(false)


  let bttn;

  if (ctx.isLoggedin) {
    bttn = (
      <Button onClick={ctx.logout} variant="primary">
        Logout
      </Button>
    );
  } else {
    bttn = (
      <NavLink style={{ color: "white", textDecoration: "none" }} to="/login">
        Login
      </NavLink>
    );
  }

  const navigateToAlbums = () => {
    navigate("/Store");
  };

  const StateChangeHandler=()=>{
    setShowCart(!ShowCart)
  }

  return (
    <React.Fragment>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <NavLink style={{ color: "white", textDecoration: "none" }} to="/">
            Home
          </NavLink>
          {ctx.isLoggedin && (
            <NavLink
              style={{ color: "white", textDecoration: "none" }}
              to="/Store"
            >
              Shop
            </NavLink>
          )}
          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            to="/About"
          >
            About Us
          </NavLink>
          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            to="/ContactUs"
          >
            Contact Us
          </NavLink>
          {ctx.isLoggedin && <CartButton onShow={StateChangeHandler} />}
          {bttn}
        </Container>
      </Navbar>
      <div>
        <Navbar bg="secondary" variant="dark" className="mb-3">
          <div style={{ height: "15rem" }}>
            <h2
              className="center-navbar"
              style={{ marginLeft: "30rem", marginTop: "3rem" }}
            >
              The Generics
            </h2>
            {ctx.isLoggedin && (
              <Button
                className="btn btn-dark"
                style={{
                  marginLeft: "40rem",
                  fontSize: "20px",
                  marginTop: "10px",
                }}
                onClick={navigateToAlbums}
              >
                Go to Albums
              </Button>
            )}
          </div>
        </Navbar>
      </div>
      {ShowCart && <Cart onCancel={StateChangeHandler}/>}
      <Container>
        <p style={{ textAlign: "center", fontFamily: "fantasy", fontSize:'3rem' }}>About Us</p>
        <p style={{paddingLeft:'20rem',paddingRight:'20rem',fontSize: '20px'}}>
          We are The Generics, a rock band that formed in the heart of the city
          with a shared passion for music. Our sound is a fusion of classic rock
          and modern influences, creating an energetic and soulful vibe that
          resonates with music lovers of all ages.
        </p>
        <p style={{paddingLeft:'20rem',paddingRight:'20rem',fontSize: '20px'}}>
          With years of experience on stage, we've honed our live performances
          to be an unforgettable experience. Whether it's an intimate club gig
          or a large festival, we bring the same energy and commitment to every
          performance. Our songs touch on themes of love, loss, and the journey
          of life, all backed by powerful guitar riffs, pounding drums, and
          captivating vocals.
        </p>
        <p style={{paddingLeft:'20rem',paddingRight:'20rem',fontSize: '20px'}}>
          We believe in the power of music to bring people together, and we're
          grateful for the incredible community of fans who have supported us
          throughout our journey. We are constantly evolving, exploring new
          sounds, and working on our next big project. Stay tuned for new
          releases and tour dates — we can't wait to share the next chapter with
          you!
        </p>
      </Container>
    </React.Fragment>
  );
};

export default About;
