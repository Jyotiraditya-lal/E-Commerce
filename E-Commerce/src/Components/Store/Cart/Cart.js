import React, { useContext } from "react";
import CartItems from "./CartItems";
import "./Cart.css";
import Context from "../Context/context";
import CartModal from "../UI/Modal";
import { Button } from "react-bootstrap";

const Cart = (props) => {
  const Cartctx = useContext(Context);

  const isEmptyCart = Cartctx.items.length === 0;

  const totalAmount = Cartctx.items.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  const RemoveHandler = (id) => {
    Cartctx.RemoveItems(id);
  };

  return (
    <CartModal onRemove={props.onCancel}>
      <header>
        <Button
          className="btn btn-danger"
          style={{ marginLeft: "35rem" }}
          onClick={props.onCancel}
        >
          x
        </Button>
      </header>
      <p style={{ fontFamily: "cursive", textAlign: "center",fontSize: '2rem' }}>Your Cart</p>
      {!isEmptyCart && (
        <ul className="cart-items">
          {Cartctx.items.map((product) => (
            <CartItems
              key={product.id}
              url={product.imageUrl}
              title={product.title}
              price={product.price}
              amount={product.amount}
              onRemove={RemoveHandler.bind(null, product.id)}
            />
          ))}
        </ul>
      )}
      {!isEmptyCart && (
        <div>
          <span style={{marginLeft:'25rem'}}>Total Amount: ${totalAmount.toFixed(2)}</span>
          <br />
          <br />
          <span>
            <Button onClick={Cartctx.purchase} style={{marginLeft:'29rem'}}>Purchase</Button>
          </span>
        </div>
      )}
      {isEmptyCart && <p style={{marginLeft: '10rem',color: 'red'}}>Add items to be displayed on the cart</p>}
    </CartModal>
  );
};

export default Cart;
