import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from "@syncfusion/ej2-react-popups"

import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { Ecommerce, Orders, Calendar, Employees, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages'

import { useStateContext } from './contexts/ContextProvider'

import './App.css'

const App = () => {

	const { activeMenu } = useStateContext()

	return (
		<div className="App">
			<BrowserRouter>
				<div className="main__wrapper">

					<div className="navbar__wrapper">
						<div className="navbar__content">
							<Navbar />
						</div>
					</div>

					<div className="tooltip content">
						<TooltipComponent content="Settings" position="Top">
							<button type="button" className="tooltip button">
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>

					{activeMenu ? (
						<div className="sidebar">
							<Sidebar />
						</div>
					) : (
						<div className="sidebar hidden">
							<Sidebar />
						</div>
					)}

					<div>
						<Routes>
							<Route path="/" element={<Ecommerce />} />
							<Route path="/ecommerce" element={<Ecommerce />} />

							<Route path="/orders" element={<Orders />} />
						</Routes>
					</div>


				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
