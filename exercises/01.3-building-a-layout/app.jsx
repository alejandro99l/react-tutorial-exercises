import React from "react"; // Main React.js library
import ReactDOM from "react-dom"; // We use ReactDOM to render into the DOM

const data = {
	image: "../../.learn/assets/Dylan.png?raw=true",
	cardTitle: "Bob Dylan",
	cardDescription:
		"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		label: "Go to wikipedia",
	},
};

// Modify the 'content' variable below to display the desired bootstrap card
let content = (
	<div class="card m-5">
		<img class="card-img-top" src={data.image} alt="Card image cap" />
		<div class="card-body">
			<h5 class="card-title">{data.cardTitle}</h5>
			<p class="card-text">{data.cardDescription}</p>
			<a href={data.button.url} class="btn btn-primary">
				{data.button.label}
			</a>
		</div>
	</div>
);

ReactDOM.render(content, document.querySelector("#myDiv"));
