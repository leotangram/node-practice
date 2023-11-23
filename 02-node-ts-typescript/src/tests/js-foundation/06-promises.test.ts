import { getPokemonById } from '../../js-foundations/06-promises'

describe('js-foundation/06-promises', () => {
  test('getPokemonById should return a Pokemon', async () => {
    const pokemonId = 1
    const pokemonName = await getPokemonById(pokemonId)

    expect(pokemonName).toEqual('bulbasaur')
  })

  test('should return an error if pokemon does not exist', async () => {
    const pokemonId = 100000000

    try {
      await getPokemonById(pokemonId)
      expect(true).toBeFalsy()
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`)
    }
  })
})
