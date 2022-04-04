import { useState } from 'react'

const Home = () => {

	// let title = 'React Course'
	// const number = 8
	// const obj = { name: 'Mark', age: 8 }

	const clickHandler = (txt, e) => {
		console.log(txt, e)
	}

	const [title, setTitle] = useState('React Course')

	const changeTitle = () => {
		setTitle('Cool React Course')
	}

	return (
		<div className="wrapper">
			<h1>{title}</h1>

			{/* <p>{number}</p>
			<p>{[1, 2, 3, 4, 5]}</p>
			<p>{Math.random()}</p>
			<p>{obj.name}</p> */}

			<button onClick={(e) => clickHandler('clicked', e)}>Click Event</button>
			<button onClick={() => changeTitle()}>Change Title</button>

		</div>
	);
}

export default Home;
