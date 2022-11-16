export type TypePokemon = {
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
