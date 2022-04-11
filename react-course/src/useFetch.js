import { useState, useEffect } from "react"

const useFetch = (url) => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		setTimeout(() => {
			fetch(url)
				.then(response => {
					if (!response.ok) {
						throw Error('Unable to fetch data')
					}
					return response.json()
				})
				.then(data => {
					console.log(data)
					setData(data)
					setIsLoading(false)
					setError(null)
				})
				.catch(err => {
					// console.log(err.message)
					setIsLoading(false)
					setError(err.message)
				})
		}, 1000)
	}, [url])

	return { data, isLoading, error }
}

export default useFetch
