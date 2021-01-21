// IMPORT MODULES under test here:
import { renderProduct } from '../items/render-product.js';
import { findById } from '../shopping-cart/find-by-id.js';
import { renderCartItem } from '../shopping-cart/render-cart-item.js';

const test = QUnit.test;
const plant =
    {
        id: 1,
        name: 'Crested Fluffel',
        image: 'crested-fluffel.jpg',
        description: 'Very rare fruiting body with feather-like pollination whisps.',
        fragrant: true,
        safetyNotes: 'Sniff in moderation.',
        price: 10
    };

const shoppingCart = [
    {
        id: 1,
        quantity: 3
    },
    {
        id: 2,
        quantity: 2
    },
    {
        id: 3,
        quantity: 1
    },
];
    
test('tests renderProduct function; input is an inventory item and output should be a rendered <li>', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="list-item"><p class="item-id">ID: 1</p><h3 class="item-name">Crested Fluffel</h3><img class="item-image" src="../assets/images/crested-fluffel.jpg" alt="Crested Fluffel flower"><p class="item-description">Very rare fruiting body with feather-like pollination whisps.</p><p class="item-fragrant">Fragrant? Yes.</p><p class="item-safety">Safety notes: Sniff in moderation.</p><button class="item-price" value="1">€10</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(plant);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('tests findById function; input is a cart item and an id and output should be the first item that matches that id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = shoppingCart[0];

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(shoppingCart, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('tests renderCartItem function; input is a cart item and output should be a rendered <tr>', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<tr><td><img src="../assets/images/crested-fluffel.jpg" alt="Fluted Yodel"></td><td>Fluted Yodel</td><td>3</td><td>€30</td></tr>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCartItem(shoppingCart[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
