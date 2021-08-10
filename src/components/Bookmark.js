import React, { Fragment, useState, useRef } from 'react';

export default function DisplayBookmark({
	bookmark,
	toggleForm,
	handleDelete
}) {
	return (
		<>
			<div className="row bg-white pt-3">
				<div className="col-12">
					<h3>{bookmark.title}</h3>
					<p>
						<a href={bookmark.url} target="_blank">
							{bookmark.url}
						</a>
					</p>
				</div>
			</div>
			<div className="row bg-white pb-3">
				<div className="col-12">
					<button
						className="btn btn-outline-secondary mr-2"
						onClick={toggleForm}
					>
						Edit
					</button>
					<button className="btn btn-outline-secondary" onClick={handleDelete}>
						Delete
					</button>
				</div>
			</div>
		</>
	);
}
