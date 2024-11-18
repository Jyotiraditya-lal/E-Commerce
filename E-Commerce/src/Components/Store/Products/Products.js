import React, { useContext } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Products.css";
import Context from "../Context/context";

const Products = () => {
  const Cartctx = useContext(Context);
  const navigate = useNavigate();

  const AddHandler = (item) => {
    Cartctx.AddItems({ ...item, amount: 1 });
  };

  const productsArr = [
    {
      id: "1",
      title: "Fire Kytes",
      price: 100,
      imageUrl:
        "https://img.freepik.com/free-vector/fire-background-design_1189-212.jpg?t=st=1731928656~exp=1731932256~hmac=64813508556d5e7af7ac6a4af8ed5cc1af4b406e0afd7dd4b77ab8f2a903c67a&w=740",
    },
    {
      id: "2",
      title: "Young wild and free",
      price: 50,
      imageUrl:
        "https://img.freepik.com/premium-vector/tshirt-sticker-wild-free-channel-your-inner-adventurer-with-design-featuring-majestic_646696-1542.jpg?w=740",
    },
    {
      id: "3",
      title: "Night changes",
      price: 70,
      imageUrl:
        "https://img.freepik.com/premium-vector/night-sky-with-bright-shining-stars_1948-85.jpg?w=996",
    },
    {
      id: "4",
      title: "Country roads",
      price: 100,
      imageUrl:
        "https://img.freepik.com/free-photo/beautiful-view-several-wooden-barns-countryside_181624-50600.jpg?t=st=1731929624~exp=1731933224~hmac=f66d91c92e3beb2ff1142399893b37229d8871990fc917a8eb1860fe42fc857a&w=996",
    },
  ];

  function details(id) {
    navigate(`/Store/${id}`);
  }

  const products = (
    <div className="container">
      <Row className="gx-4 gy-4">
        {productsArr.map((product) => (
          <Col xs={6} md={6} lg={6} key={product.id}>
            <Container>
              <Card className="mb-4" style={{ borderColor: "white" }}>
                <Card.Title className="text-center">
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to={`/Store/${product.id}`}
                  >
                    {product.title}
                  </Link>
                </Card.Title>
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: '1rem'
                  }}
                >
                  <Card.Img
                    variant="top"
                    onClick={() => details(product.id)}
                    style={{
                      cursor: "pointer",
                      maxWidth: "50%",
                      maxHeight: "100%",
                      objectFit: "fill",
                    }}
                    src={product.imageUrl}
                  />
                </div>
                <Card.Body>
                  <Container
                    style={{ display: "flex" }}
                  >
                    <h2 style={{ fontFamily: "fantasy",marginLeft: '7.5rem' }}>${product.price}</h2>
                    <Button
                      onClick={AddHandler.bind(null, product)}
                      style={{marginLeft:'9rem'}}
                    >
                      Add To Cart
                    </Button>
                  </Container>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        ))}
      </Row>
    </div>
  );

  return <>{products}</>;
};

export default Products;
