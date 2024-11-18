import React, { useContext, useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import ContactForm from "./ContactForm";
import { NavLink, useNavigate } from "react-router-dom";
import LoginContext from "../Login/Context/login-context";
import CartButton from "../Store/Cart/CartButton";
import Cart from "../Store/Cart/Cart";

const ContactUs = () => {
  const SendHandler = async (info) => {
    await fetch(
      "https://react-http-333ab-default-rtdb.asia-southeast1.firebasedatabase.app/ContactInfo.json",
      {
        method: "POST",
        body: JSON.stringify(info),
      }
    );
  };

  const ctx = useContext(LoginContext);
  const [ShowCart, setShowCart] = useState(false);

  const navigate = useNavigate();

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

  const StateChangeHandler = () => {
    setShowCart(!ShowCart);
  };

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
      {ShowCart && <Cart onCancel={StateChangeHandler}/>}
      <ContactForm onSendInfo={SendHandler} />
    </React.Fragment>
  );
};

export default ContactUs;
