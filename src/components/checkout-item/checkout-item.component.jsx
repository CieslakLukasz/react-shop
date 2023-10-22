import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
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
  const { name, price, imageUrl, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, deleteItem } =
    useContext(CartContext);

  const deleteHandler = () => deleteItem(cartItem);
  const increment = () => addItemToCart(cartItem);
  const decrement = () => removeItemFromCart(cartItem);

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
