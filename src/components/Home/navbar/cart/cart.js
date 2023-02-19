import React from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../../../redux/reduxdata";
function Cart() {
    const cart=useSelector(selectCount());
    return (
        <div>
            <div>
                <img src=""/>
            </div>
            <div>
                <button>+</button>
                <p>{cart.value}</p>
                <button>-</button>
            </div>
            <div>
                <button>Order</button>
            </div>

        </div>

    )
}
export default Cart