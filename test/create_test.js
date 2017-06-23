const assert = require('assert')
const User = require('../src/user')

describe('Creating records', () => {
  it('saves a user', (done) => {
    let bob = new User({
      name: 'bob'
    })

    bob.save()
      .then(() => {
        assert(!bob.isNew)
        done();
      })

  })
})
