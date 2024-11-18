import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Context from "../Context/context";

const CartButton = (props) => {
  const Cartctx = useContext(Context);

  const number = Cartctx.items.reduce((total, item) => {
    const amount = Number(item.amount) || 0;
    return total + amount;
  }, 0);

  return (
    <Button
      variant="dark"
      onClick={props.onShow}
      style={{ borderColor: "blue" }}
    >
      Cart({number})
    </Button>
  );
};

export default CartButton;
