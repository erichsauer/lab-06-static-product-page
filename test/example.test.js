// IMPORT MODULES under test here:
import { renderProduct } from '../items/render-product.js';
import { plants } from '../items/data.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="list-item"><p class="item-id">ID: 1</p><h3 class="item-name">Crested Fluffel</h3><img class="item-image" src="../assets/images/crested-fluffel.jpg" alt="Crested Fluffel flower"><p class="item-description">Very rare fruiting body with feather-like pollination whisps.</p><p class="item-fragrant">Fragrant? Yes.</p><p class="item-safety">Safety notes: Sniff in moderation.</p><button class="item-price" value="1">€10</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(plants[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
