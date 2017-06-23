const assert = require('assert');
const User = require('../src/user');

describe('Validating records', () => {
  it('requires a user name', () => {
    let bob = new User({ name: undefined })
    const validationResult = bob.validateSync()
    let message = validationResult.errors.name.message
    assert(message === 'Name is required')
  })

  it('requires a username longer than 2 char', () => {
    let bob = new User({ name: 'Al'})
    const validationResult = bob.validateSync()
    const { message } = validationResult.errors.name
    console.log(message);

    assert(message === 'Name must be longer than 2 characters.')
  })

  it('disallows invalid records from being saved', (done) => {
    const user = new User({name: 'Al'});
    user.save()
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        // console.log(err);
        const { message } = err.errors.name
        assert(message === 'Name must be longer than 2 characters.')
        done()
      })
  })
})
