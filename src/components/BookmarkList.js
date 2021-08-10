import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import BookmarkDate from './BookmarkDate';

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
											<p>
												<strong>
													<Link to={`/${bookmark._id}`}>{bookmark.title}</Link>
												</strong>
												<br />
												<a href={bookmark.url} target="_blank">
													{bookmark.url}
												</a>
											</p>
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
