import React, { Fragment, useState, useRef } from 'react';

export default function UpdateBookmark({ bookmark, handleData }) {
	// reference fields for pre-population
	const titleInput = useRef(null);
	const urlInput = useRef(null);

	// update bookmark
	const handleUpdate = async e => {
		e.preventDefault();

		handleData(titleInput.current.value, urlInput.current.value);
	};

	return (
		<form onSubmit={handleUpdate}>
			<label>
				Title:{' '}
				<input type="text" ref={titleInput} defaultValue={bookmark.title} />
			</label>
			<label>
				URL: <input type="text" ref={urlInput} defaultValue={bookmark.url} />
			</label>
			<input type="submit" value="Update Bookmark" />
		</form>
	);
}
