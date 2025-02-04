import { Fragment, useContext } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

import { ReactComponent as Dewlogo } from '../../assets/Dewlogo.svg'

import { LogoContainer, NavigationContainer, NavLinks } from "./navigation.style";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.util";

//장바구니 
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

// NavBar를 표현. 로고와 메뉴를 표시함
const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Dewlogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>

                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>LOG OUT</NavLink>
                        ) : (
                            <NavLink to='/auth'>
                                LOG IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
