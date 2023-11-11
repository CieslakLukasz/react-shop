import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  HeaderBlock,
  HeadersConatiner,
  Title,
} from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalPrice = useSelector(selectCartTotalPrice);

  return (
    <CheckoutContainer>
      <HeadersConatiner>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </HeadersConatiner>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Title>Total: ${cartTotalPrice}</Title>
    </CheckoutContainer>
  );
};

export default Checkout;
