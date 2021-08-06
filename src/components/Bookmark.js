import React, { Fragment, useState, useRef } from 'react';

export default function DisplayBookmark({
	bookmark,
	toggleForm,
	handleDelete
}) {
	return (
		<>
			<h3>{bookmark.title}</h3>
			<p>
				<a href={bookmark.url} target="_blank">
					{bookmark.url}
				</a>
			</p>

			<button onClick={toggleForm}>Edit</button>
			<button onClick={handleDelete}>Delete</button>
		</>
	);
}
