const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of db', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe'})
    joe.save()
      .then(() => done());
  });

  it('finds all users with name of joe', (done) => {
    User.find()
      .then((users) => {
        console.log(users[0]._id);
        assert(users[0]._id.toString() === joe._id.toString())
        done();
      })

  });

  it('find a user with a specific id', (done) => {
    User.findOne({ _id: joe._id })
      .then((user) => {
        console.log(user);
        assert(user.name === 'Joe')
        done()
      })
  })


});
