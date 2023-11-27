import { getUUID } from '../../plugins'

describe('plugins/get-id.plugin', () => {
  test('getUUID should return a UUID', () => {
    const uuid = getUUID()

    expect(uuid.length).toBe(36)
  })
})
