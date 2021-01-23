// IMPORT MODULES under test here:
import { renderProduct } from '../items/render-product.js';
import { findById, calcItemTotal, calcCartTotal } from '../utils.js';
import { renderCartItem } from '../shopping-cart/render-cart-item.js';
import { getCart, clearCart, setCart } from '../shopping-cart/utils.js';

const test = QUnit.test;
const plants = [
    {
        id: 1,
        name: 'Crested Fluffel',
        image: 'crested-fluffel.jpg',
        description: 'Very rare fruiting body with feather-like pollination whisps.',
        fragrant: true,
        safetyNotes: 'Sniff in moderation.',
        price: 10
    },
    {
        id: 2,
        name: 'Cragged Fallpop',
        image: 'cragged-fallpop.jpg',
        description: 'Generally appear in woodland settings among forest duff.',
        fragrant: false,
        safetyNotes: 'Best to keep in the bell jar.',
        price: 15
    },
];

const shoppingCart = [
    {
        id: 1,
        quantity: 3
    },
    {
        id: 2,
        quantity: 2
    },
];

test('tests renderProduct function; input is an inventory item and output should be a rendered <li>', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class=\"list-item\"><p class=\"item-id\">ID: 1</p><h3 class=\"item-name\">Crested Fluffel</h3><img class=\"item-image\" src=\"../assets/images/crested-fluffel.jpg\" alt=\"Crested Fluffel flower\"><p class=\"item-description\">Very rare fruiting body with feather-like pollination whisps.</p><p class=\"item-fragrant\">Fragrant? Yes.</p><p class=\"item-safety\">Safety notes: Sniff in moderation.</p><input class=\"item-quantity\" type=\"number\" placeholder=\"order quantity\"><button class=\"item-price\" value=\"1\">€10</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(plants[0]);
    
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

test('tests calcItemTotal function; input is a cart array, a product array and an id and output should be 30', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 30;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(shoppingCart, plants, 1);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('tests renderCartItem function; input is a cart item and output should be a rendered <tr>', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<tr><td><img src="../assets/images/crested-fluffel.jpg" alt="Crested Fluffel"></td><td>Crested Fluffel</td><td>3</td><td>€30</td></tr>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCartItem(plants, shoppingCart, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('tests calcCartTotal function; input is a cart array and output should be a total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 60;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcCartTotal(shoppingCart, plants);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('tests getCart function; output should be a cart array pulled from localStorage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const stringyShoppingCart = JSON.stringify(shoppingCart);
    localStorage.setItem('CART', stringyShoppingCart);

    const expected = shoppingCart;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getCart();
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('tests clearCart function; should set localStorage to stringy default cart', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const stringyShoppingCart = JSON.stringify(shoppingCart);
    localStorage.setItem('CART', stringyShoppingCart);
    const expected = '[]';
    clearCart();
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = localStorage.getItem('CART');
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('tests setCart function; should set an array to localStorage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const stringyShoppingCart = JSON.stringify(shoppingCart);
    localStorage.setItem('CART', '');
    const expected = stringyShoppingCart;
    setCart(shoppingCart);
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = localStorage.getItem('CART');
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
