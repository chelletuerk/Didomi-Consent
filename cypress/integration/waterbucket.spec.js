describe('My First Test', () => {
  it('Doesnt do much, but everything it should be!', () => {
    expect(true).to.equal(true)
  })

  // it('can add text to inputs', () => {
  //   // We'll store our item text in a variable so we can reuse it
  //   const newItem = '5'
  //
  //   // Let's get the input element and use the `type` command to
  //   // input our new list item. After typing the content of our item,
  //   // we need to type the enter key as well in order to submit the input.
  //   // This input has a data-test attribute so we'll use that to select the
  //   // element in accordance with best practices:
  //   // https://on.cypress.io/selecting-elements
  //   cy.get('#input1').type(`${newItem}{enter}`)
  //
  //   // Now that we've typed our new item, let's check that it actually was added to the list.
  //   // Since it's the newest item, it should exist as the last element in the list.
  //   // In addition, with the two default items, we should have a total of 3 elements in the list.
  //   // Since assertions yield the element that was asserted on,
  //   // we can chain both of these assertions together into a single statement.
  //   cy.get('.todo-list li')
  //     .should('have.length', 1)
  //     .last()
  //     .should('have.text', newItem)
  // })



})
