import { useState, useEffect } from 'react'
import PizzasList from './PizzasList'
import useFetch from './useFetch'

const Home = () => {

	// const [pizzas, setPizzas] = useState(null)
	// [
	// 	{ name: 'Margheritta', ingredients: ['tomato base, ', 'cheese '], vegan: true, id: 1 },
	// 	{ name: 'Capriciosa', ingredients: ['tomato base, ', 'cheese, ', 'ham '], vegan: false, id: 2 }
	// ])


	// const selectPizza = (id) => {
	// 	const selectedPizza = pizzas.filter(pizza => pizza.id === id)
	// 	setPizzas(selectedPizza)
	// }

	const { data: pizzas, isLoading, error } = useFetch('http://localhost:8000/pizzas')
	// const [client, setClient] = useState('Bob')
	// const [isLoading, setIsLoading] = useState(true)
	// const [error, setError] = useState(null)

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		fetch('http://localhost:8000/pizzas')
	// 			.then(response => {
	// 				if (!response.ok) {
	// 					throw Error('Unable to fetch data')
	// 				}
	// 				return response.json()
	// 			})
	// 			.then(data => {
	// 				console.log(data)
	// 				setPizzas(data)
	// 				setIsLoading(false)
	// 				setError(null)
	// 			})
	// 			.catch(err => {
	// 				// console.log(err.message)
	// 				setIsLoading(false)
	// 				setError(err.message)
	// 			})
	// 	}, 1000)
	// }, [])

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isLoading && <div>Loading...</div>}
			{pizzas && <PizzasList pizzas={pizzas} title="Pizzas List" />}
			{/* <PizzasList pizzas={pizzas.filter((pizza) => pizza.vegan === true)} title="Vegan Pizzas" /> */}
			{/* <button className="changeClient" onClickCapture={() => setClient('Marek')}>Change Client</button> */}

		</div>
	);
}

export default Home;
