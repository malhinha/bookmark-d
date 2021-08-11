import React, { Fragment } from 'react';

export default function BookmarkTags({ tags }) {
	return (
		<>
			<ul className="tags mt-3">
				{tags.map((tag, i) => {
					return (
						<li key={i} className="badge badge-pill badge-light mr-1 p-2">
							{tag}
						</li>
					);
				})}
			</ul>
		</>
	);
}
