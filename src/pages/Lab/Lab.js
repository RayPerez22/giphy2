import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Lab() {
	//useState is a React hook
	const [gifUrl, setGifUrl] = useState(null);
	const url = 'https://api.giphy.com/v1/gifs/random?api_key=';
	const apiKey = process.env.REACT_APP_API_KEY;

	// Create a function that pulls a random Gif from Giphy API
	// Async/Await => newer alternative for Promise chaining
	// https://javascript.info/async-await

	const getGif = async () => {
		try {
			const res = await axios.get(url + apiKey);
			setGifUrl(res.data.data.images.original.url);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getGif();
	}, []);

	return (
		<div className="lab m-3">
			<button
				type="button"
				className="btn btn-warning m-3"
				onClick={getGif}>
				Click Me
			</button>
			<div className="container-fluid m-3">
				<img src={gifUrl} alt="random gif" height="500px" />
			</div>
		</div>
	);
}

export default Lab;
