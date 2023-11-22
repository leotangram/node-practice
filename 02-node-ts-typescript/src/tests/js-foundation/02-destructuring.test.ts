import { characters } from '../../js-foundations/02-destructuring'

describe('js-foundations/02-destructuring', () => {
  test('should contain Flash, Superman', () => {
    expect(characters).toContain('Flash')
    expect(characters).toContain('Superman')
  })

  test('should be Flash like first character, and second Superman', () => {
    const [flash, superman] = characters

    expect(flash).toBe('Flash')
    expect(superman).toBe('Superman')
  })
})
