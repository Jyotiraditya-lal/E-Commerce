import React from "react";
import { Card } from "react-bootstrap";

const CartItems = (props) => {
  return (
    <Card style={{ width: "30rem", marginBottom: "1rem",marginLeft: '5rem',border: 'none' }}>
      <Card.Body style={{ display: "flex", alignItems: "center" }}>
        <Card.Img
          src={props.url}
          style={{ width: "5rem", height: "5rem", marginRight: "1rem" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <span style={{ flex: 1 }}>{props.title}</span>
          <span style={{ flex: 1 }}>${props.price}</span>
          <span style={{ flex: 1 }}>
            {props.amount}
            <span
              style={{
                color: "red",
                cursor: "pointer",
                marginLeft: "0.5rem",
                fontWeight: "bold",
                fontSize: '1.5rem',
                marginLeft:'3rem'
              }}
              onClick={props.onRemove}
              title="Remove"
            >
              -
            </span>
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CartItems;
