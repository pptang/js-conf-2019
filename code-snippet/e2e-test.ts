const describeChatForSeller = () => {
  context('Buyer', () => {
    // User Scenario
    describe('CommentBox', () => {
      // Display Logic: every expected element should be shown
      it('should have title "Buyer"', () => {
        cy.contains('Buyer Information').should('be.visible');
      });
      it('should have a button to send a chat message', () => {
        cy.contains('a', 'Send Button').should('be.visible');
      });
      // More visibility assertions...

      // Business Logic
      it('should let user input comments and submit', () => {
        // 1. I'll type in the message in the comment box.
        cy.get('textarea[placeholder="Please input your comment"')
          .should('be.visible')
          .type('This product is awesome!!!')
          .siblings('button')
          .click();
        // 2. I'll see a dialog box...
      });
    });
  });
}