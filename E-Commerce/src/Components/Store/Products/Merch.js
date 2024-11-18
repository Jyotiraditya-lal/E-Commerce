import React, { useContext } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Products.css";
import Context from "../Context/context";

const Merch = () => {
  const Cartctx = useContext(Context);
  const navigate = useNavigate();

  const AddHandler = (item) => {
    Cartctx.AddItems({ ...item, amount: 1 });
  };

  const productsArr = [
    {
      id: "5",
      title: "T-shirt",
      price: 300,
      imageUrl:
        "https://img.freepik.com/free-photo/smiling-young-handsome-guy-wearing-black-t-shirt-points-himself-isolated-orange-wall_141793-103271.jpg?t=st=1731931129~exp=1731934729~hmac=6b3b0260f38536c7df17f47f4e8c837dd29e6e0bb1c9f97248b1f776d38a0bb1&w=900",
    },
    {
      id: "6",
      title: "Hoodie",
      price: 250,
      imageUrl:
        "https://img.freepik.com/premium-psd/perfect-fit-realistic-front-t-shirt-hoodie-mockup_926015-2625.jpg?w=996",
    },
    {
      id: "7",
      title: "Cup",
      price: 170,
      imageUrl:
        "https://img.freepik.com/premium-vector/funny-good-morning-coffee_56126-3.jpg?w=740",
    },
    {
      id: "8",
      title: "Necklace",
      price: 450,
      imageUrl:
        "https://img.freepik.com/free-photo/bust-showcase-jewelry-display-necklace-pendant-jewelry-lifestyle-fashion-accessories-mockup_460848-14340.jpg?t=st=1731931381~exp=1731934981~hmac=0d893f19bbf0dcb59fe089e697416e6f0eb7eef6312f740f797fb832c3856f87&w=740",
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

export default Merch;
