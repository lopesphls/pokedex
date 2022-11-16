import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pokeApi from '../../service/poke.api'
import { TypePokemon } from '../../types/TypesPokemon'
import './details.style.scss'

const Details = () => {
	const [pokemon, setPokemom] = useState<TypePokemon>()
	const params = useParams()

	useEffect(() => {
		const { id } = params
		async function getByName(id: string) {
			const response = await pokeApi.pokemonByName(id)
			setPokemom(response)
		}

		getByName(id)
	}, [])

	return (
		<div className='details'>
			<h1>{pokemon?.name}</h1>
			<img
				src={pokemon?.sprites.other.dream_world.front_default}
				alt={pokemon?.name}
			/>
		</div>
	)
}

export default Details
