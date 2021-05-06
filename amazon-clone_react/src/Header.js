// here we laid out the layout. It’s just like basic HTML but in React we call it JSX.
import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// this creates a links which connects routes without reloading pages
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    // We have brought in the states, and the dispatch
    // functions so that we can dispatch actions to the reducer.
    const [{ basket, user }, dispatch] = useStateValue();
    // The handleAuthentication function checks if the user
    // is logged in or not, if else, logs out when the user clicks on the greeting.
    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                {/* this is putting our amazon logo all the way to the left */}
                <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>

            {/* this is putting our search bar in the middle */}
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* this is putting everything else to the right */}
            {/* We check if the user is authenticated. If yes,
            then the user is greeted else the user has an option to login. */}
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Hello {!user ? 'Guest' : user.email}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>

                <Link to='/orders'>
                    <div className="header__option">
                        <span className="header__optionLineOne">returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {/* We removed the hardcoded 0 from the basket and added
                            basket?.length , which will give the number of items in the basket 
                            array. */}
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default Header
