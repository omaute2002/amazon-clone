import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(/)
  // }

  return (
    <>
      <div className="subtotal">
        <CurrencyFormat
          // rendex text part will get displayed on the screen
          renderText={(value) => (
            <>
              <p>
                {/* Part of the homework */}
                Subtotal ({basket.length} items):
                <strong>{value} </strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)} // Part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button onClick={(e) => navigate("/payment")}>
          Proceed to checkout
        </button>
      </div>
    </>
  );
}

export default Subtotal;
