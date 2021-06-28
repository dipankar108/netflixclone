import React, { useEffect, useState } from 'react';
import './nav.css';
function Nav() {
	const [show, handleShow] = useState();
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener('scroll', null);
		};
	}, []);
	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png"
				alt="Netflix Logo"
				className="nav__logo"
			/>
			<img
				className="nav__avatar"
				src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
				alt="Netflix Logo"
			/>
		</div>
	);
}

export default Nav;
