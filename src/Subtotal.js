import React from "react";
import "./Subtotal.css";
import NumberFormat from "react-number-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <NumberFormat
        value={0}
        displayType="text"
        decimalScale={2}
        thousandSeparator={true}
        prefix="$"
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
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
