import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import BookmarkUrl from './BookmarkUrl';
import BookmarkTags from './BookmarkTags';

export default function BookmarkListItem({ bookmark }) {
	return (
		<>
			<div className="listDetail">
				<div>
					<strong>
						<Link to={`/${bookmark._id}`}>{bookmark.title}</Link>
					</strong>
				</div>
				<BookmarkUrl url={bookmark.url} />
				<BookmarkTags tags={bookmark.tags} />
			</div>
		</>
	);
}
