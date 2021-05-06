// here we laid out the layout. It’s just like basic HTML but in React we call it JSX.
import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <div className="header">
            
            {/* this is putting our amazon logo all the way to the left */}
            <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />

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

                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">
                        0
                    </span>
                </div>

            </div>

        </div>
    )
}

export default Header
