import React, { Fragment } from 'react';

export default function BookmarkUrl({ url }) {
	return (
		<>
			<div>
				<a href={url} target="_blank">
					{url}
				</a>
			</div>
		</>
	);
}
