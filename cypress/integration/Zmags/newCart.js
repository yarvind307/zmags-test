/// <reference types="Cypress" />


describe('Zmags cart funtton.', function(){

    it('Basic search', function(){

        
        //1. Open https://friendly-jepsen-665dc7.netlify.app/pages/cnc-test-1.html
        cy.visit('https://friendly-jepsen-665dc7.netlify.app/pages/cnc-test-1.html')

        //6. Click to scene 2
        cy.get('[style="position: absolute; pointer-events: auto; cursor: pointer; width: 54.6111px; height: 54.6111px; transform: translate(918.559px, 280.701px);"] > [style="width: 100%; height: 100%; overflow: visible; position: relative; cursor: pointer; border-width: 0px;"] > img').click();

        //7. Click to open product page
        //cy.xpath('//body/div[2]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/a[1]/div[1]').click()
        //cy.get('[style="width: 100%; height: 100%; opacity: 1; background: rgb(120, 120, 120); overflow: visible; position: relative; cursor: pointer; border-radius: 0px; border: 2px solid rgb(104, 104, 104);"]').click()
        // getting error from the iframe ot _top elements in the cypress, could not found any wrorking solution so skipping this part.

        //8. Click add to cart
        cy.visit('https://friendly-jepsen-665dc7.netlify.app/products/product_2/')
        cy.get('.snipcart-add-item').click();

        //9. Close the popup
        cy.get('[data-test=Close] > .snip-ico').click().click();

        //10. Validate top minicart shows the correct total item count
        cy.get('.snipcart-total-items').contains("1");

        //11. Reopen the cart, validate the correct item is added
        cy.get('.snipcart-checkout').click();
    
        cy.get('.snip-product__name').contains("Limited Edition Backpack");
        cy.get('.snip-quantity-trigger__text').contains("1");

        //12. Fill in billing and delivery details

        cy.get('.js-next').click();
        cy.get('#snip-name').type("User");
        cy.get('#snip-city').type("mumbai");
        cy.get('#snip-phone').type("233565768");
        cy.get('[data-for="company"] > .snip-form__label').type("RSS");
        cy.get('#snip-email').type("affafa@gmail.com");
        cy.get('#snip-address1').type("mumbai, kandvali");
        cy.get('#snip-address2').type("mumabia,ahajhj");
        cy.get('#snip-postalCode').type("333333");
        cy.get('#snipcart-next').click();

        //13. Complete purchase
        cy.get('#snipcart-paymentmethod-pay').click();
        cy.get('.js-submit').click();

        //14. Intercept payment POST request

        

       cy.intercept("POST", "https://app.snipcart.com/api/cart/c7c29ab0-546c-4a53-96b7-66014be9812a/pay").as('zmags');
       cy.wait('@zmags').then((intercept)=>{
           console.log("INTERCEPTION ", intercept);

       }); 


    })

})