import React from "react";
import { connect } from "react-redux";

import { CustomButton } from "../custom-button/custom-button.component";
import { CartItem } from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export const CartDropdown = connect(mapStateToProps)(({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((c_item) => (
          <CartItem key={c_item.id} item={c_item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
});
