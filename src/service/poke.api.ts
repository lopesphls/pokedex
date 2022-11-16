import axios from 'axios'

const api = axios.create({
	baseURL: 'https://pokeapi.co/api/v2/',
})

class PokeApi {
	private async Pokemon() {
		const response = await api.get('pokemon').then(res => res.data)
		const { results } = response
		const dados = results.map(element => {
			return element.name
		})
		// const names = dados.map(element => {
		// 	return element.name
		// })
		const pokemons = dados.map((el: string) => this.pokemonByName(el))
		return Promise.all(pokemons)
	}

	public async allPokemon() {
		const response = await this.Pokemon()
		return response
	}

	public async pokemonByName(name: string) {
		const response = await api.get(`pokemon/${name}`).then(res => res.data)
		return response
	}
}

export default new PokeApi()
