import React, { Fragment } from 'react';
import BookmarkDate from './BookmarkDate';
import BookmarkListItem from './BookmarkListItem';

export default function BookmarkList(props) {
	return (
		<>
			<div className="col-12 col-md-7 col-lg-8">
				<h2 className="pb-3 pt-3" fontWeight="600">
					John's <strong>Bookmarks</strong>
				</h2>
				<div className="card">
					<div className="card-body">
						<ul className="list-group list-group-flush bg-white pt-2">
							{props.bookmarks.map((bookmark, i) => {
								return (
									<li key={bookmark._id} className="list-group-item">
										<div className="listItem">
											<BookmarkDate bookmark={bookmark} />
											<BookmarkListItem bookmark={bookmark} />
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
