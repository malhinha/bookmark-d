import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function BookmarkList(props) {
	return (
		<ul>
			{props.bookmarks.map((bookmark, i) => {
				return (
					<li key={bookmark._id}>
						<Link to={`/${bookmark._id}`}>{bookmark.title}</Link>
						<br />
						<a href={bookmark.url}>{bookmark.url}</a>
					</li>
				);
			})}
		</ul>
	);
}
