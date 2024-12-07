Cypress.Commands.add('waitForStableDOM', (timeout = 5000, interval = 200) => {
    let lastHTML = '';
    let isStable = false;
  
    return cy.wrap(null, { timeout }).should(() => {
      const currentHTML = document.body.innerHTML;
      isStable = currentHTML === lastHTML;
      lastHTML = currentHTML;
  
      // If DOM is not stable, throw an error to retry
      if (!isStable) {
        throw new Error('DOM is not yet stable');
      }
    });
  });
  