const assert = require('assert')
const User = require('../src/user')

describe('update a user', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' })
    joe.save()
      .then(() => done())
  })

  function assertName(operation , done) {
    operation
      .then(() => {
        return User.find({})
      })
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === 'Alex')

        done();
      })
  }

  it('instance type using set n save', (done) => {
    console.log(joe);
    joe.set('name', 'Alex');
    assertName(joe.save(), done)


  })

  it('A model instance can update', (done) => {
    assertName(joe.update({ name: 'Alex' }), done)
  })

  it('A model update ca update', (done) => {
    assertName(User.update({ name: 'Joe' }, { name: 'Alex'}), done)
  })

  it('A model update ca update one record', (done) => {
    assertName(
      User.findOneAndUpdate({ name: 'Joe'}, { name: 'Alex'}), done)
  })

  it('A model update can find a record with an id and update', (done) => {
    assertName(User.findByIdAndUpdate(joe.id, { name: 'Alex'}), done)
  })

  it('A user can have their post count incremented by 1', () => {
    
  })



})
