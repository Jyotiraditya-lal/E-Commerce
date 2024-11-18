import React, { useState, useContext, useEffect } from "react";
import Context from "./context";
import LoginContext from "../../Login/Context/login-context";

const ContextProvider = (props) => {
  const ctx = useContext(LoginContext);

  const [ItemState, setItemState] = useState([]);
  const uId = ctx.UID;

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        `https://react-http-333ab-default-rtdb.asia-southeast1.firebasedatabase.app/Cart/${uId}.json`
      );
      const data = await response.json();

      const LoadedItems = [];

      for (const key in data) {
        const item = data[key];
        if (
          item &&
          item.title &&
          item.amount != null &&
          item.price != null &&
          item.id &&
          item.imageUrl
        ) {
          LoadedItems.push({
            Tokenid: key,
            title: item.title,
            amount: item.amount,
            price: item.price,
            id: item.id,
            imageUrl: item.imageUrl,
          });
        }
      }

      if (LoadedItems.length > 0) {
        setItemState([...LoadedItems]);
      }
    };

    fetchItems();
  }, [uId]);

  const AddItemHandler = async (item) => {
    const itemID = ItemState.map((itm) => itm.id);

    if (ItemState.length > 0) {
      if (itemID.includes(item.id)) {
        const updatedItems = ItemState.map((itm) =>
          itm.id === item.id ? { ...itm, amount: itm.amount + 1 } : itm
        );
        setItemState(updatedItems);
      } else {
        setItemState((prevState) => [...prevState, item]);
      }
    } else {
      setItemState([item]);
    }

    await fetch(
      `https://react-http-333ab-default-rtdb.asia-southeast1.firebasedatabase.app/Cart/${uId}/${item.id}.json`,
      {
        method: "POST",
        body: JSON.stringify(item),
      }
    );
  };

  const RemoveItemHandler = async (id) => {
    const updatedItems = ItemState.map((itm) =>
      itm.id === id ? { ...itm, amount: itm.amount - 1 } : itm
    ).filter((itm) => itm.amount > 0);
    setItemState(updatedItems);

    await fetch(
      `https://react-http-333ab-default-rtdb.asia-southeast1.firebasedatabase.app/Cart/${uId}/${id}.json`,
      {
        method: "DELETE",
      }
    );
  };

  const PurchaseHandler = () => {
    alert("Purchase successful");
    setItemState([]);
  };

  const CartContext = {
    items: ItemState,
    AddItems: AddItemHandler,
    RemoveItems: RemoveItemHandler,
    purchase: PurchaseHandler,
  };

  return (
    <Context.Provider value={CartContext}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
