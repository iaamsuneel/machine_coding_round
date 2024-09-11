import React from "react";
import Rating from "./Rating";

export default function Star() {
	return (
		<div>
			<Rating value={5} star={2.5} />
		</div>
	);
}
