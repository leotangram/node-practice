import { getUserById } from '../../js-foundations/03-callbacks'

describe('js-foundation/03-callbacks', () => {
  test('getUserById should return an error if user does not exist', done => {
    const id = 10

    getUserById(id, (error, user) => {
      expect(error).toBe(`User not found with id ${id}`)
      expect(user).toBeUndefined()
      done()
    })
  })
})
