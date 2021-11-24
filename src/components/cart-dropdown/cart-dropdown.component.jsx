import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";

import { CustomButton } from "../custom-button/custom-button.component";
import { CartItem } from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export const CartDropdown = withRouter(
  connect(mapStateToProps)(({ cartItems, history, dispatch }) => {
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.length ? (
            cartItems.map((c_item) => (
              <CartItem key={c_item.id} item={c_item} />
            ))
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )}
        </div>
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </div>
    );
  })
);
