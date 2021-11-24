import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import "./cart-icon.styles.scss";

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export const CartIcon = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
});
