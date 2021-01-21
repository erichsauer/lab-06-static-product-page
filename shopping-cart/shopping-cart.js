import { plants } from '../items/data.js';
import { shoppingCart } from './data.js';
import { renderCartItem } from './render-cart-item.js';
import { findById, calcItemTotal } from '../utils.js';

const tableBody = document.querySelector('tbody');

let total = 0;

for (const cartItem of shoppingCart) {
    let plant = findById(plants, cartItem.id);

    let lineTotal = calcItemTotal(shoppingCart, plants, cartItem.id);
    total += lineTotal;

    let tableRowDOM = renderCartItem(plants, shoppingCart, cartItem.id);

    tableBody.append(tableRowDOM);
}

console.log(total);