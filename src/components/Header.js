import React, { Fragment } from 'react';

export default function Header() {
	return (
		<div id="header">
			<div className="container mt-5 mb-3">
				<header className="row">
					<div className="col-1">
						<img
							src="https://miro.medium.com/max/256/0*1xhFr-mZLpVLiHVF.png"
							id="logo"
						/>
					</div>
					<h2 className="col-11" fontWeight="300">
						cheap delicious knock-off
					</h2>
				</header>
			</div>
		</div>
	);
}
