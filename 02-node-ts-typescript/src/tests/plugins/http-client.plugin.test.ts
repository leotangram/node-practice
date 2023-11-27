import { httpClientPlugin } from '../../plugins/http-client.plugin'

describe('plugins/http-client', () => {
  test('httpClientPlugin should return data', async () => {
    const data = await httpClientPlugin.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    )

    expect(data).toEqual({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      completed: expect.any(Boolean)
    })
  })

  test('httpClientPlugin should have POST, PUT and DELETE methods', () => {
    expect(httpClientPlugin.post).toBeDefined()
    expect(httpClientPlugin.put).toBeDefined()
    expect(httpClientPlugin.delete).toBeDefined()
  })
})
