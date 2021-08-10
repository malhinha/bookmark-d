import React, { Fragment } from 'react';

export default function BookmarkDate({ bookmark }) {
	// months array
	const monthsList = [
		'JAN',
		'FEB',
		'MAR',
		'APR',
		'MAY',
		'JUN',
		'JUL',
		'AUG',
		'SEP',
		'OCT',
		'NOV',
		'DEC'
	];

	const year = parseInt(`${bookmark.updatedAt}`.slice(2, 4), 10);
	const month =
		monthsList[parseInt(`${bookmark.updatedAt}`.slice(5, 7), 10) - 1];
	const day = parseInt(`${bookmark.updatedAt}`.slice(8, 10), 10);
	const shortDate = `${day} ${month} ${year}`;

	return <p className="date text-black-50 mr-3">{shortDate}</p>;
}
