import React, { Fragment } from 'react';

export default function BookmarkList(props) {
	return (
		<ul>
			{props.bookmarks.map((bookmark, i) => {
				return (
					<li key={bookmark._id}>
						<a href={bookmark.url}>{bookmark.title}</a>
						<br />
						{bookmark.url}
					</li>
				);
			})}
		</ul>
	);
}
