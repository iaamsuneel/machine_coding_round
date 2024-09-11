import React, { useState } from "react";

export default function Rating(props) {
	const { value, star } = props;
	const [rating, setRating] = useState(star);
	console.log(value);
	const startHandler = (index) => {
		setRating(index + 1);
	};
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<div>
				<div>
					<h3>Start Rating</h3>
				</div>
				<div style={{ columnGap: "10px" }}>
					{[...Array(value)].map((item, index) => {
						console.log(
							"star - index + 1 > 1--->",
							rating,
							index,
							rating - (index + 1),
							rating - (index + 1) > 1
						);
						return (
							<span
								key={index}
								onClick={() => startHandler(index)}
								style={{
									cursor: "pointer",
									color: index < rating ? "gold" : "gray",
									width: "10px",
								}}
							>
								&#9733;
								{rating - index > 1
									? "F"
									: rating - index === 0.5
									? "HF"
									: "F"}
							</span>
						);
					})}
				</div>
			</div>
		</div>
	);
}
