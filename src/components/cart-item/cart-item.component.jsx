import {
  CartImg,
  CartItemContainer,
  Name,
  ItemDetails,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <CartItemContainer>
      <CartImg src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity === 1 ? price : `${quantity} x ${price}`}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
