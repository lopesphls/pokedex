import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar'
import Home from '../pages/Home'
const Router = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}
export default Router
