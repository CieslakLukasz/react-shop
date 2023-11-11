import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../ultis/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.components";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer className="logo-container" to="/react-shop">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
