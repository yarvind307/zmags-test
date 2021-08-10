describe('zmags screenshort cases.', function(){

    it('Screenshort', function(){

        //1. Open https://friendly-jepsen-665dc7.netlify.app/pages/cnc-test-1.html
        cy.visit('https://friendly-jepsen-665dc7.netlify.app/pages/cnc-test-1.html')

        //2. Take screenshot only of the experience viewer, exclude the rest of page.
        //3. Save screenshot on the first run
        cy.get('.ExperienceViewer_experienceViewer_2hSVo').screenshot("Base Run");
        //This have saved the screenshot in the cypress/screenshot folder.

        //4. Compare it against the &quot;base run&quot; every next run, calculate % visual difference with every next run
        
    })

})