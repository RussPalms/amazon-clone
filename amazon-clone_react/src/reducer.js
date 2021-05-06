// In initialState, we declare the states we are going to use. In this case, basket 
// and user.
export const initialState = {
    basket: [],
    user: null
};

// Selector
export const getBasketTotal = (basket) =>
    // The optional chaining operator ?. permits reading the value of a property 
    // located deep within a chain of connected objects without having to expressly 
    // validate that each reference in the chain is valid. The ?. operator functions 
    // similarly to the . chaining operator, except that instead of causing an error 
    // if a reference is nullish (null or undefined), the expression short-circuits 
    //with a return value of undefined. When used with function calls, it returns
    // undefined if the given function does not exist.
    // This results in shorter and simpler expressions when accessing chained 
    // properties when the possibility exists that a reference may be missing. It can
    //  also be helpful while exploring the content of an object when there's no 
    // known guarantee as to which properties are required.
    basket?.reduce((amount, item) => item.price + amount, 0);

    // The actual reducer function takes in a state and action. The state and action 
    // is provided so that the reducer can perform operations on the state.
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            // We set the state, we update the basket, but here we use the spread 
            // operator (…) so that previous state is not lost. And that’s how we add 
            // items to the basket array in our state in reducer.
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        default:
            return state;
    }
};

export default reducer;