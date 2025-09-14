import React from "react";

export default function Programme({ theme = "light" }) {
	const style = {
		background: theme === "dark" ? "#333333" : "#FAF9F6",
		color: theme === "dark" ? "#FAF9F6" : "#123456",
        padding: "10rem 0",
		borderRadius: "10px",
        maxWidth: "100vw",
		margin: "2rem auto",
		boxShadow: theme === "dark" ? "0 2px 8px #2228" : "0 2px 8px #B88A2A22",
	};
	return (
		<section style={style}>
			<h2>Programme du Magal</h2>
			<ul style={{textAlign:'left', lineHeight:1.7}}>
				
			</ul>
		</section>
	);
}
