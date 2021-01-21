import { plants } from '../items/data.js';
import { calcCartTotal } from '../utils.js';
import { shoppingCart } from './data.js';
import { renderCartItem } from './render-cart-item.js';

const tableBody = document.querySelector('tbody');

calcCartTotal(shoppingCart, plants);

for (const cartItem of shoppingCart) {

    let tableRowDOM = renderCartItem(plants, shoppingCart, cartItem.id);

    tableBody.append(tableRowDOM);
}
