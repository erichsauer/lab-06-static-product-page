// import { totalExport } from '../shopping-cart/shopping-cart.js';
import { plants } from './data.js';
import { renderProduct } from './render-product.js';

const itemList = document.getElementById('item-list');
// const shoppingCart = document.getElementById('cart-link');

for (let plant of plants) {
    const plantItem = renderProduct(plant);

    itemList.append(plantItem);
}

// if (!totalExport) {
//     shoppingCart.style.display = 'none';
// }
