describe('OrangeHRM | Session', () => {
    
    beforeEach('Precondición: Usuario debe estar situado en la home page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('contain', 'login');
        cy.clearCookies();
        cy.clearLocalStorage();      
    });
    
    it('TC1: Checking Login', () => {
        
        let username: string = "Admin";
        let password: string = "admin123";

        cy.session('Login', () => 
        {
            cy.get('[name="username"]').type(username).should('be.visible');        
            cy.get('[name="password"]').type(password).should('be.visible');        
            cy.get('[type="submit"]').click();                   
        });
    });
});