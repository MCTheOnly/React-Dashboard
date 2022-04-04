const PizzasList = (props) => {
	const pizzas = props.pizzas
	const title = props.title
	const choosePizza = props.choosePizza

	console.log(props)

	return (
		<div className="pizza-list">
			<h2>{title}</h2>
			{pizzas.map((pizza) => (
				<div className="single-pizza" key={pizza.id}>
					<h2>{pizza.name}</h2>
					<p className="ingredients">{pizza.ingredients}</p>
					<button className="choosPizza" onClick={() => choosePizza(pizza.id)}>Select</button>
				</div>
			))}
		</div>
	);
}

export default PizzasList;
