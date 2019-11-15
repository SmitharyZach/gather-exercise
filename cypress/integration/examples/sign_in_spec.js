describe('Sign in page specs', function() {
  // sign in credentials

  const email = 'jon@snow.com'
  const password = 'season8isbad'
  const username = 'Jon'

  beforeEach(() => {
      cy.visit('https://www.opentable.com')
  })

  it('Sign in successfully', function() {

    cy.contains('Sign in').click()
    // enter in email and password
    cy.get('input[id="user"]').type(email)
    cy.get('input[id="password"]').type(password)
    // submit the log in form
    cy.get('form[id="loginForm"]').submit()

    // ensure the correct user is signed in
    cy.get('a[id="global_nav_username"]').contains(username)
  })

  it('Attempt to sign in with no password', function () {

    cy.contains('Sign in').click()

    // enter in email only
    cy.get('input[id="user"]').type(email)
    cy.get('input[id="password"]').type('{enter}')

    // submit the log in form with no password
    cy.get('form[id="login-form"]').submit()

    // correct error message shows
    cy.get('span[class="field-validation-error"]').contains('Please enter your password.')
  })

  it('Attempt to sign in with no email', function () {

    cy.contains('Sign in').click()

    // enter in email only
    cy.get('input[id="user"]').type('{enter}')
    cy.get('input[id="password"]').type(password)

    // submit the log in form with no email
    cy.get('form[id="login-form"]').submit()

    // correct error message shows
    cy.get('span[class="field-validation-error"]').contains('Please enter your Email')
  })
})
