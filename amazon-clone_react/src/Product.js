import React from "react";
import "./Product.css";
// this is the statevalue hook
import { useStateValue } from "./StateProvider";

// in our product we're passing in the properties of our component
function Product({ id, title, image, price, rating}) {
    // this means we are using the useStateValue hook to bring in a state named basket
    // and we are also getting the dispatch function which allows us to dispatch actions
    // to change the state in the reducer.
    const [{ basket }, dispatch] = useStateValue();

    // The addToBasket function fires off the dispatch to the reducer instructing to
    // update the state with the provided data. Here the type is “ADD_TO_BASKET” which 
    // we will define in the reducer in a bit. We are dispatching the action along 
    // with its data.
    const addToBasket =  () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__info">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

                <img src={image} alt="" />

                <button onClick={addToBasket}>
                    Add to Basket
                </button>

        </div>
    );
}

export default Product;
