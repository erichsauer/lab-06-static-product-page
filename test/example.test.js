// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class=list-item">
    <p class="product-id">ID: 1</p>
    <h3 class="product-name">Crested Fluffel</h3>
    <img src="../assets/images/crested-fluffel.jpg" alt="crested fluffel flower">
    <p class="product-description">The Crested Fluffel is very rare.</p>
    <p class="product-magic">Fragrant? Yes.</p>
    <p class="product-safety">Safety notes: Sniff in moderation.</p>
    <button value="1" class="product-price">€10</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
