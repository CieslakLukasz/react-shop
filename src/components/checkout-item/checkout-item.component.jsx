import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
  deleteItem,
} from "../../store/cart/cart.action";

import {
  CheckoutItemContainer,
  ImageContainer,
  Img,
  CheckoutItemSpan,
  CheckoutItemQuantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl, quantity } = cartItem;

  const deleteHandler = () => dispatch(deleteItem(cartItems, cartItem));
  const increment = () => dispatch(addItemToCart(cartItems, cartItem));
  const decrement = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={name} />
      </ImageContainer>
      <CheckoutItemSpan>{name}</CheckoutItemSpan>
      <CheckoutItemQuantity>
        <Arrow onClick={decrement}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increment}>&#10095;</Arrow>
      </CheckoutItemQuantity>
      <CheckoutItemSpan>${price}</CheckoutItemSpan>
      <RemoveButton onClick={deleteHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
