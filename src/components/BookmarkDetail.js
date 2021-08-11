import React, { Fragment, useState, useRef } from 'react';
import BookmarkUrl from './BookmarkUrl';
import BookmarkTags from './BookmarkTags';

export default function BookmarkDetail({ bookmark, toggleForm, handleDelete }) {
	return (
		<>
			<div className="row bg-white pt-3">
				<div className="col-12">
					<h3>{bookmark.title}</h3>
					<BookmarkUrl url={bookmark.url} />
					<BookmarkTags tags={bookmark.tags} />
				</div>
			</div>
			<div className="row bg-white pt-3 pb-3">
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
