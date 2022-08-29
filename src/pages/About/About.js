import React from 'react';
import './About.css';

const About = () => {
	return (
		<div className="container about p-4">
			<div>
				<h1 className="display-2 ">About</h1>
				<hr></hr>
			</div>
			<div className="about-content ">
				<h2 className="display-5">
					React Router Giphy Lab is part of Per Scholas group
					projects.
				</h2>
				<h3>Tasks:</h3>
				<ul>
					<li>
						Use React Router to render the following pages: home,
						about, and Giphy lab.{' '}
						<i className="twa twa-check-mark-button"></i>
					</li>
					<li>
						Must have a nav bar and footer.{' '}
						<i className="twa twa-check-mark-button"></i>
					</li>
					<li>
						Giphy lab must use <code>useEffect()</code> to display a
						random gif when accessing the page. A button should be
						included to change the gif into a new random gif.{' '}
						<i className="twa twa-check-mark-button"></i>
					</li>
					<li>
						Must use <code>try/catch</code> and{' '}
						<code>async/await</code>.{' '}
						<i className="twa twa-check-mark-button"></i>
					</li>
				</ul>
				<h3>Hungry for more?</h3>
				<ul>
					<li>
						Use bootstrap to design your website.{' '}
						<i className="twa twa-check-mark-button"></i>
					</li>
					<li>
						Use pages and components folder.{' '}
						<i className="twa twa-check-mark-button"></i>
					</li>
					<li>
						Use another third-party API and make it into a page.
					</li>
					<ul>
						<li>Would be nice to have some kind of form.</li>
						<li>Maybe map over a list of items?</li>
					</ul>
					<li>
						Use nested routing with React Router (don't forget
						Outlet).
					</li>
				</ul>
				<h3>Famished?</h3>
				<ul>
					<li>Create your own API. Connect it to your front end.</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
