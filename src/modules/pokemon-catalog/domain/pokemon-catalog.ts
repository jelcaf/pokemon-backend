import { ForQueryingPokemons } from './for-querying-pokemons';
import { Pokemon } from './models';
import { ForGettingPokemons } from './for-getting-pokemons';

export class PokemonCatalog implements ForQueryingPokemons {
  constructor(private readonly pokemonRepository: ForGettingPokemons) {}

  async getPokemonByItsID(id: string): Promise<Pokemon> {
    return this.pokemonRepository.getPokemonById(id);
  }

  async getPokemonByItsName(name: string): Promise<Pokemon> {
    return this.pokemonRepository.getPokemonByName(name);
  }

  async getPageOfPokemons(limit = 5, skip = 0): Promise<Pokemon[]> {
    return this.pokemonRepository.findPokemons(limit, skip);
  }

  async getNumberOfPokemons(): Promise<number> {
    return this.pokemonRepository.countPokemons();
  }
}
