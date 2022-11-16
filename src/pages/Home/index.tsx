import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import pokeApi from '../../service/poke.api'
import './home.style.scss'

type api = {
	abilities: {
		ability: {
			name: string
			url: string
		}
	}
	base_experience: number
	moves: {
		move: {
			name: string
			url: string
		}
	}
	name: string
	sprites: {
		front_default: string
		other: {
			dream_world: {
				front_default: string
			}
			home: {
				front_default: string
			}
		}
	}
	stats: {
		base_stat: number
		effort: number
		stat: {
			name: string
			url: string
		}
	}
	types: {
		slot: number
		type: {
			name: string
			url: string
		}
	}
	weight: number
}

const Home = () => {
	const [pokemon, setPokemon] = useState<api[]>([])

	const navigate = useNavigate()

	useEffect(() => {
		async function getAll() {
			const response = await pokeApi.allPokemon()

			setPokemon(response)
		}

		getAll()
	}, [])

	return (
		<main className='main-home'>
			<aside id='aside'>Filtros</aside>
			<div id='box'>
				{pokemon.map((el, index) => (
					<div
						id='box'
						key={index}
						className='box-pokemon'
						onClick={() => navigate(`/details/${el.name}`)}>
						<h1 className='box-title'>{el.name}</h1>
						<img
							src={el.sprites.other.dream_world.front_default}
							alt=''
							className='img-pokemon'
						/>
					</div>
				))}
			</div>
		</main>
	)
}

export default Home
