import { useState } from 'react'
import PizzasList from './PizzasList';

const Home = () => {
	const [pizzas, setPizzas] = useState([
		{ name: 'margherita', ingredients: ['tomato base, ', 'chees '], vegan: true, id: 1 },
		{ name: 'capriciosa', ingredients: ['tomato base, ', 'chees, ', 'ham '], vegan: false, id: 2 }
	])

	const choosePizza = (id) => {
		const choosePizza = pizzas.filter(pizza => pizza.id === id)
		setPizzas(choosePizza)
	}

	return (
		<div className="home">
			<PizzasList pizzas={pizzas} title="Pizzas List" choosePizza={choosePizza} />
			{/* <PizzasList pizzas={pizzas.filter((blog) => blog.vegan === true)} title="Vegan Pizzas" choosePizza={choosePizza} /> */}
		</div>
	);
}

export default Home;
