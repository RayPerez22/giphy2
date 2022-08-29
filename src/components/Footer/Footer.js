import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<div className="footer container-fluid position-absolute bottom-0 start-50 translate-middle-x text-bg-dark p-3">
			<p className="lead">
				<i className="twa twa-high-voltage"></i> by Passion. Coded by{' '}
				<a
					className="link-success"
					href="https://github.com/suzannemozes"
					target="_blank"
					rel="noreferrer">
					Suzanne
				</a>
				,{' '}
				<a
					className="link-success"
					href="https://github.com/cyanghan007"
					target="_blank"
					rel="noreferrer">
					Chan
				</a>
				,{' '}
				<a
					className="link-success"
					href="https://github.com/RayPerez22"
					target="_blank"
					rel="noreferrer">
					Raymond
				</a>{' '}
				and{' '}
				<a
					className="link-success"
					href="https://github.com/Iskandar-S"
					target="_blank"
					rel="noreferrer">
					Iskandar
				</a>
			</p>
			<p className="lead">
				Developers from NYC{' '}
				<i className="twa twa-lg twa-red-apple"></i>
			</p>
		</div>
	);
}

export default Footer;
