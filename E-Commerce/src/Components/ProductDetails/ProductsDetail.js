import React, { useContext, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Button, Card, Container, Navbar } from "react-bootstrap";
import LoginContext from "../Login/Context/login-context";
import CartButton from "../Store/Cart/CartButton";

const ProductDetails = () => {
  const params = useParams();
  const ctx = useContext(LoginContext);
  const [ShowCart, setShowCart] = useState(false);

  const productsArr = [
    {
      id: "1",
      title: "Fire Kytes",
      price: 100,
      imageUrl:
        "https://img.freepik.com/free-vector/fire-background-design_1189-212.jpg?t=st=1731928656~exp=1731932256~hmac=64813508556d5e7af7ac6a4af8ed5cc1af4b406e0afd7dd4b77ab8f2a903c67a&w=740",
      description:
        'Feel the heat of passion and adventure with "Fire Kytes," a design that captures the essence of burning desires and untamed energy. Just like the song, it reminds you to chase your dreams with unrelenting fervor, lighting up your world as you rise above challenges. A perfect choice for those who refuse to be ordinary.',
    },
    {
      id: "2",
      title: "Young Wild and Free",
      price: 50,
      imageUrl:
        "https://img.freepik.com/premium-vector/tshirt-sticker-wild-free-channel-your-inner-adventurer-with-design-featuring-majestic_646696-1542.jpg?w=740",
      description:
        'Inspired by the anthem of carefree youth, "Young Wild and Free" is a tribute to living in the moment and embracing the joys of freedom. This design channels a laid-back vibe while reminding you to take life as it comes, without regrets or restrictions. Perfect for anyone who believes in the beauty of spontaneity.',
    },
    {
      id: "3",
      title: "Night Changes",
      price: 70,
      imageUrl:
        "https://img.freepik.com/premium-vector/night-sky-with-bright-shining-stars_1948-85.jpg?w=996",
      description:
        'As the lyrics go, "even when the night changes, it will never change me and you." This design captures the serene beauty of a starlit night, symbolizing memories that last forever. Whether you’re a romantic or a dreamer, "Night Changes" will remind you of the fleeting yet unforgettable moments in life.',
    },
    {
      id: "4",
      title: "Country Roads",
      price: 100,
      imageUrl:
        "https://img.freepik.com/free-photo/beautiful-view-several-wooden-barns-countryside_181624-50600.jpg?t=st=1731929624~exp=1731933224~hmac=f66d91c92e3beb2ff1142399893b37229d8871990fc917a8eb1860fe42fc857a&w=996",
      description:
        'Take a nostalgic journey with "Country Roads," inspired by the classic song that feels like home. This design brings the tranquility and simplicity of rural life to the forefront, evoking memories of open fields, wooden barns, and the warmth of a familiar place. Perfect for anyone yearning for a return to their roots.',
    },
    {
      id: "5",
      title: "T-shirt",
      price: 300,
      imageUrl:
        "https://img.freepik.com/free-photo/smiling-young-handsome-guy-wearing-black-t-shirt-points-himself-isolated-orange-wall_141793-103271.jpg?t=st=1731931129~exp=1731934729~hmac=6b3b0260f38536c7df17f47f4e8c837dd29e6e0bb1c9f97248b1f776d38a0bb1&w=900",
      description:
        "A classic and versatile T-shirt made from premium materials to ensure maximum comfort and durability. Whether it's for casual outings or layering up, this wardrobe essential is a must-have for any occasion.",
    },
    {
      id: "6",
      title: "Hoodie",
      price: 250,
      imageUrl:
        "https://img.freepik.com/premium-psd/perfect-fit-realistic-front-t-shirt-hoodie-mockup_926015-2625.jpg?w=996",
      description:
        "Stay cozy and stylish with this premium hoodie. Perfect for chilly days or relaxed evenings, its soft fabric and comfortable fit make it an everyday favorite. A go-to choice for comfort and casual fashion.",
    },
    {
      id: "7",
      title: "Cup",
      price: 170,
      imageUrl:
        "https://img.freepik.com/premium-vector/funny-good-morning-coffee_56126-3.jpg?w=740",
      description:
        "Start your mornings right with this beautifully designed cup. Whether for coffee, tea, or any favorite beverage, its sleek design and durable build ensure every sip is enjoyable.",
    },
    {
      id: "8",
      title: "Necklace",
      price: 450,
      imageUrl:
        "https://img.freepik.com/free-photo/bust-showcase-jewelry-display-necklace-pendant-jewelry-lifestyle-fashion-accessories-mockup_460848-14340.jpg?t=st=1731931381~exp=1731934981~hmac=0d893f19bbf0dcb59fe089e697416e6f0eb7eef6312f740f797fb832c3856f87&w=740",
      description:
        "Elevate your style with this exquisite necklace. Designed with elegance and charm, it adds a touch of sophistication to any outfit, making it perfect for special occasions or daily wear.",
    },
  ];
  

  const product = productsArr.find((prod) => prod.id === params.productId);

  if (!product) {
    return <p>Something went Wrong while loading {params.productId}</p>;
  }

  let bttn;

  if (ctx.isLoggedin) {
    bttn = (
      <Button onClick={ctx.logout} variant="primary">
        Logout
      </Button>
    );
  } else {
    bttn = (
      <NavLink style={{ color: "white" }} to="/login">
        Login
      </NavLink>
    );
  }

  const StateChangeHandler = () => {
    setShowCart(!ShowCart);
  };

  return (
    <div>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <NavLink style={{ color: "white", textDecoration: "none" }} to="/">
            Home
          </NavLink>
          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            to="/Store"
          >
            Shop
          </NavLink>
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
          <CartButton onShow={StateChangeHandler} />
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
          </div>
        </Navbar>
      </div>
      <Card
        className="mb-4"
        style={{ width: "auto", border: "none", marginTop: "30px" }}
      >
        <Card.Title
          style={{
            marginLeft: "36rem",
            fontSize: "3rem",
            marginBottom: "1.5rem",
          }}
        >
          {product.title} (${product.price})
        </Card.Title>
        <Card.Img
          style={{
            marginLeft: "24rem",
            width: "50%",
            height: "500px",
            objectFit: "fill",
            marginBottom: "1.5rem",
          }}
          src={product.imageUrl}
        />
        <Card.Body>
          <Card.Text
            style={{
              fontSize: "1.5rem",
              paddingLeft: "10rem",
              paddingRight: "5rem",
            }}
          >
            {product.description}
          </Card.Text>
        </Card.Body>
      </Card>

      <h2 style={{ textAlign: "center",marginBottom:'1.5rem' }}>Reviews</h2>
      <Container style={{
              fontSize: "1.5rem",
              paddingLeft: "4rem",
              paddingRight: "5rem",
            }}>
        <ul>
          <li style={{ fontFamily: "monospace" }}>
            "Amazing quality and design! The attention to detail really exceeded
            my expectations. Definitely worth the price!" – Alex P.
          </li>
          <br />
          <li style={{ fontFamily: "monospace" }}>
            "I was impressed by how well the product matched its description.
            It’s not only visually appealing but also very durable." – Jamie L.
          </li>
          <br />
          <li style={{ fontFamily: "monospace" }}>
            "Fast delivery and excellent packaging. The product feels premium
            and looks even better in person. Highly satisfied!" – Morgan K.
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default ProductDetails;
