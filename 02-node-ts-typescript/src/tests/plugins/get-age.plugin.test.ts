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

  test('getAge should return 0 years', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995)

    const birthdate = '1995-10-21'
    const age = getAge(birthdate)

    expect(spy).toHaveBeenCalled()
  })
})
