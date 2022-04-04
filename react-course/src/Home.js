import { useState, useEffect } from 'react'
import PizzasList from './PizzasList'

const Home = () => {

	const [pizzas, setPizzas] = useState([
		{ name: 'Margheritta', ingredients: ['tomato base, ', 'cheese '], vegan: true, id: 1 },
		{ name: 'Capriciosa', ingredients: ['tomato base, ', 'cheese, ', 'ham '], vegan: false, id: 2 }
	])

	const [client, setClient] = useState('Bob')

	const selectPizza = (id) => {
		const selectedPizza = pizzas.filter(pizza => pizza.id === id)
		setPizzas(selectedPizza)
	}

	useEffect(() => {
		console.log('Effect Used')
	}, [client])

	return (
		<div className="home">
			<PizzasList pizzas={pizzas} title="Pizzas List" selectPizza={selectPizza} />
			{/* <PizzasList pizzas={pizzas.filter((pizza) => pizza.vegan === true)} title="Vegan Pizzas" /> */}
			<p>{client}</p>
			<button className="changeClient" onClickCapture={() => setClient('Marek')}>Change Client</button>

		</div>
	);
}

export default Home;
