import React, { Fragment, useState, useRef } from 'react';

export default function UpdateBookmark({ bookmark, handleData }) {
	// reference fields for pre-population
	const titleInput = useRef(null);
	const urlInput = useRef(null);
	const tagsInput = useRef(null);

	// update bookmark
	const handleUpdate = async e => {
		e.preventDefault();

		handleData(
			titleInput.current.value,
			urlInput.current.value,
			tagsInput.current.value.split(',')
		);
	};

	return (
		<div className="row">
			<div className="col-12">
				<form onSubmit={handleUpdate}>
					<div className="form-group">
						<label className="mt-3">Title: </label>
						<input
							type="text"
							className="form-control"
							ref={titleInput}
							defaultValue={bookmark.title}
						/>

						<label className="mt-3">URL: </label>
						<input
							type="text"
							className="form-control"
							ref={urlInput}
							defaultValue={bookmark.url}
						/>

						<label className="mt-3">Tags (comma separated): </label>
						<textarea
							rows="3"
							className="form-control"
							ref={tagsInput}
							defaultValue={bookmark.tags}
						/>

						<input
							type="submit"
							className="btn btn-primary mt-3"
							value="Update Bookmark"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
