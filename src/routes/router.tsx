import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar'
import Details from '../pages/Details'
import Home from '../pages/Home'
const Router = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path='details/:id' element={<Details />} />
			</Routes>
		</BrowserRouter>
	)
}
export default Router
