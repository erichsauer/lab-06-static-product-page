import { plants } from '../items/data.js';
import { calcCartTotal } from '../utils.js';
// import { shoppingCart } from './data.js';
import { renderCartItem } from './render-cart-item.js';
import { getCart } from './utils.js';

const shoppingCart = getCart();
const tableBody = document.querySelector('tbody');

for (const cartItem of shoppingCart) {
    
    let tableRowDOM = renderCartItem(plants, shoppingCart, cartItem.id);
    
    tableBody.append(tableRowDOM);
}

const orderTotalCell = document.getElementById('order-total');

let total = calcCartTotal(shoppingCart, plants);

orderTotalCell.textContent = `Order Total: €${total}`;
