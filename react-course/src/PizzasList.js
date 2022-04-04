const PizzasList = ({ pizzas, title, selectPizza }) => {

	// const pizzas = props.pizzas
	// const title = props.title

	// console.log(props)

	return (
		<div className="pizzas-lis">
			<h2>{title}</h2>
			{
				pizzas.map((pizza) => (
					<div className="single-pizza" key={pizza.id}>
						<h2>{pizza.name}</h2>
						<p className="ingredients">{pizza.ingredients}</p>
						<button className="selectPizza" onClick={() => selectPizza(pizza.id)}>Select</button>
					</div>
				))
			}
		</div>
	);
}

export default PizzasList;
