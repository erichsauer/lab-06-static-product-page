import { plants } from '../items/data.js';
import { shoppingCart } from './data.js';
import { renderCartItem } from './render-cart-item.js';
import { calcItemTotal } from '../utils.js';

const tableBody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total');

let total = 0;

for (const cartItem of shoppingCart) {
    let lineTotal = calcItemTotal(shoppingCart, plants, cartItem.id);
    
    total += lineTotal;

    let tableRowDOM = renderCartItem(plants, shoppingCart, cartItem.id);

    tableBody.append(tableRowDOM);
}

orderTotalCell.textContent = `Order Total: €${total}`;