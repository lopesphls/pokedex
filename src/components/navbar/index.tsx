import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import pokebola from '../../assets/pokebola.png'
import './navbar.style.scss'
const Navbar = () => {
	const [menu, setMenu] = useState<boolean>(true)

	const Menu = () => {}

	return (
		<header className='menu'>
			<nav className='navbar'>
				<Link to='/' className='brand'>
					<img src={pokebola} alt='' />
					Pokédex
				</Link>
				{menu ? (
					<AiOutlineMenu className='btn-menu' onClick={() => setMenu(false)} />
				) : (
					<AiOutlineClose className='btn-menu' onClick={() => setMenu(true)} />
				)}
			</nav>
			<div className={menu ? 'menu-none' : 'menu-mobile'}>
				<Link to='/'>Texto</Link>
				<Link to='/'>Texto</Link>
				<Link to='/'>Texto</Link>
				<Link to='/'>Texto</Link>
			</div>
		</header>
	)
}
export default Navbar
