import { findById } from '../utils.js';

const CART = 'CART';
const emptyCart = [];

export function getCart() {
    // set stringy const that represents cart in localStorage
    const stringyCart = localStorage.getItem(CART);

    // if there is cart data, parse it!
    if (stringyCart) {
        const parsedCart = JSON.parse(stringyCart);

    // then return it
        return parsedCart;
    } else {

    //  if not, stringify default cart and set a const
        const stringyDefaultCart = JSON.stringify(emptyCart);

    // establish an empty cart in local storage
        localStorage.setItem(CART, stringyDefaultCart);

    // return default cart array
        return emptyCart;
    }
}

export function clearCart() {
    // reset localStorage with empty stringy cart
    const stringyDefaultCart = JSON.stringify(emptyCart);
    localStorage.setItem(CART, stringyDefaultCart);
}

export function setCart(shoppingCart) {
    //takes in an array & stringifies it
    const stringyShoppingCart = JSON.stringify(shoppingCart);
    localStorage.setItem(CART, stringyShoppingCart);
}

export function addToCart(id) {
    // pulls cart from localStorage
    const shoppingCart = getCart();
    const item = findById(shoppingCart, id);

    // if item already exists in array, 
    if (item) {

    // increment item quantity
        item.quantity++;

    } else {

    // pushes item into array and
        const newItem = {
            id: id,
            quantity: 1
        };
        
        shoppingCart.push(newItem);
    }

    // set array to localStorage!
    setCart(shoppingCart);
}
