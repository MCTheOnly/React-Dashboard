const Button = ({ bgColor, color, text, size, borderRadius }) => {
	return (
		<button
			type="button"
			style={{ backgroundColor: bgColor, color, borderRadius }}>
			Elo
		</button>
	);
}

export default Button;
