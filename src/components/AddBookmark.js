import React, { Fragment, useState } from 'react';

export default function AddBookmark({ handleData }) {
	// set single bookmark state
	const [singleBookmark, setBookmark] = useState({
		title: '',
		url: ''
	});

	// capture data in textfields
	const handleChange = e => {
		setBookmark({ ...singleBookmark, [e.target.id]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();

		// error handling
		if (!singleBookmark.title) {
			alert('Please add a title before saving.');
			return;
		}

		if (!singleBookmark.url) {
			alert('Please add a URL before saving.');
			return;
		}

		// send form data to postBookmark function in App
		handleData(singleBookmark);

		// clear out state
		setBookmark({
			title: '',
			url: ''
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				id="title"
				placeholder="Website"
				value={singleBookmark.title}
				onChange={handleChange}
			/>
			<input
				type="text"
				id="url"
				placeholder="URL"
				value={singleBookmark.url}
				onChange={handleChange}
			/>
			<input type="submit" value="Add Bookmark" />
		</form>
	);
}
