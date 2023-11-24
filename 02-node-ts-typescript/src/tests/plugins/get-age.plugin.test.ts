import { getAge } from '../../plugins'

describe('plugins/get-age.plugin', () => {
  test('getAge() should return the age of a person', () => {
    const birthdate = '1992-09-15'
    const age = getAge(birthdate)

    expect(typeof age).toEqual('number')
  })

  test('getAge should return current age', () => {
    const birthdate = '1992-09-15'
    const age = getAge(birthdate)

    const calculatedAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear()

    expect(age).toEqual(calculatedAge)
  })
})
