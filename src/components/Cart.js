import React, { useEffect } from "react";
import YourCart from "./YourCart";
import { useSelector, useDispatch } from "react-redux";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import Total from "./Total";
import { getCount, clearChecked } from "../redux/actions/ProductActions";

const Cart = () => {
  const dispatch = useDispatch();
  let { cart, checkItems } = useSelector((state) => state.allProducts);

  const uniqueCart = [
    ...new Map(cart.map((item) => [item["id"], item])).values(),
  ];

  useEffect(() => {
    dispatch(getCount());
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(clearChecked());
  }, []);

  return (
    <section>
      <>
        <YourCart />
        {uniqueCart.length > 0 ? (
          <>
            {uniqueCart.map((item) => {
              return <CartList key={item.id} {...item} />;
            })}
            <Total checkItems={checkItems} />
          </>
        ) : (
          <EmptyCart />
        )}
      </>
    </section>
  );
};

export default Cart;
