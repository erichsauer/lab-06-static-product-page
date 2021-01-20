import { plants } from './data.js';
import { renderProduct } from './render-product.js';

const itemList = document.getElementById('item-list');

for (let plant of plants) {
    const plantItem = renderProduct(plant);

    itemList.append(plantItem);
}
