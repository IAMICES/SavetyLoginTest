describe('Facebook Login', () => {
    it('should login successfully', () => {
      // Navigate to Facebook login page
      cy.visit('https://www.facebook.com/login.php');
  
      // Fill in email
      cy.get('#email').type('premchit.ko@example.com');
  
      // Fill in password
      cy.get('#pass').type('Premchit01');
  
      // Click login button
      cy.get('#loginbutton').click();
  
      // Wait for redirect or handle redirect
      // Cypress will automatically wait for the next page to load
  
      // Assertion: Check if login was successful
      cy.url().should('include', 'facebook.com'); // You might need to adjust this URL
      cy.contains('Welcome to Facebook').should('exist'); // Adjust text based on what indicates successful login
    });
  });
  