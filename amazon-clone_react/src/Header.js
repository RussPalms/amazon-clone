// here we laid out the layout. It’s just like basic HTML but in React we call it JSX.
import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// this creates a links which connects routes without reloading pages
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
    // We have brought in the states, and the dispatch
    // functions so that we can dispatch actions to the reducer.
    const [{ basket, user }, dispatch] = useStateValue();

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
            <div className="header__nav">
                
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
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
    )
}

export default Header
