describe('Login Form', () => {
  const username = Cypress.env('username')
  const password = Cypress.env('password')

  it('should display error message when no username and password are entered', () => {
    cy.visit('https://savety.mynest8.com/login');

    cy.get('[data-cy="btn-submit"]').should('be.visible').type('{enter}')
    cy.get('[data-cy=กรอกชื่อผู้ใช้งาน]').should('have.value', '');
    cy.get('[data-cy=กรอกรหัสผ่าน]').should('have.value', '');

    cy.contains('กรุณากรอกข้อมูล').should('be.visible');
    cy.contains('กรุณากรอกข้อมูล').should('be.visible'); 

    cy.wait(4000);
  });

  it('should display error message when only username is entered', () => {
    cy.visit('https://savety.mynest8.com/login');

    cy.get('input[data-cy=กรอกชื่อผู้ใช้งาน]').type(username,'{Enter}');

    cy.contains('กรุณากรอกข้อมูล').should('be.visible'); 

    cy.wait(4000);
  });

  it('should show error message when only password is entered', () => {
    cy.visit('https://savety.mynest8.com/login');

    cy.get('input[data-cy=กรอกรหัสผ่าน]').type(password+'{enter}', {log: false});

    cy.contains('กรุณากรอกข้อมูล').should('be.visible');

    cy.wait(2000);
  });

  it('should successfully login when both username and password are entered', () => {
    cy.visit('https://savety.mynest8.com/login');

    cy.get('input[data-cy=กรอกชื่อผู้ใช้งาน]').type(username);
    cy.get('input[data-cy=กรอกรหัสผ่าน]').type(password+'{enter}', {log: false});

    cy.url().should('eq', 'https://savety.mynest8.com/dashboard');

    cy.wait(4000);
  });

  it('should logout successfully', () => {
    cy.visit('https://savety.mynest8.com/login');

    cy.get('input[data-cy=กรอกชื่อผู้ใช้งาน]').type(username);
    cy.get('input[data-cy=กรอกรหัสผ่าน]').type(password+'{enter}', {log: false});

    cy.url().should('eq', 'https://savety.mynest8.com/dashboard');

    cy.get('.el-avatar > img').click();
    cy.get('.el-dropdown-menu__item--divided').click();

    cy.url().should('eq', 'https://savety.mynest8.com/login');

    cy.wait(4000);
  });

});
