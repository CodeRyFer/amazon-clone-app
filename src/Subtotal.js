import React from "react";
import "./Subtotal.css";
import NumberFormat from "react-number-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket}, dispatch] = useStateValue();
  const basketTotal = () => {
    let sum = 0;
    for(let i = 0; i < basket.length; i++){
      sum += Number(basket[i].price)
    }
    return sum;
  }

  return (
    <div className="subtotal">
      <NumberFormat
        value={basketTotal()}
        displayType="text"
        decimalScale={2}
        thousandSeparator={true}
        prefix="$"
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
