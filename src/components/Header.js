import React from 'react'
// stateless component
export const Header = (props) => {
	return(
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div className="navbar-header">
					<ul className="nav navbar-nav">
						<li><a href="#">{props.homeLink}</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};