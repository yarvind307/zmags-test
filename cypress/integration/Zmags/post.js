describe('zmags post request cases.', function(){

    it('post', function(){

       //14. Intercept payment POST request
        const item  = {"cvc": "345", "expirationMonth": "1", "expirationYear": "2022", "last4Digits": "4242", "number": "4242424242424242", "ownerName": "User", "type": "visa"}
         cy.request('POST','https://app.snipcart.com/api/cart/c7c29ab0-546c-4a53-96b7-66014be9812a/pay', item)
        .should('include', {"cvc":"345","number": "4242424242424242" })
        
    })

})