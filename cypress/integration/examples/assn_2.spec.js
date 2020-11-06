function checkImageSize($img, max) {
  expect($img[0].naturalWidth).to.be.greaterThan(0);
  expect($img[0].width).to.be.lessThan(max);
}

describe('Assignment 2', () => {
  it('Successfully loads', () => {
   
      cy.visit(); // change URL to match your dev URL
      cy.htmlvalidate();
  });
});
