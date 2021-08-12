import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import BookmarkList from '../components/BookmarkList';
import AddBookmark from '../components/AddBookmark';

export default function Main() {
	// set bookmarks state
	const [bookmarks, setBookmarks] = useState([]);

	// load API into state
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/bookmarks');
				const data = await response.json();
				// sort bookmarks by date, descending
				const resortedData = data.sort(function(a, b) {
					if (a.updatedAt > b.updatedAt) return -1;
					if (a.updatedAt < b.updatedAt) return 1;
					return 0;
				});

				setBookmarks(resortedData);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	// save new bookmark
	const postBookmark = async singleBookmark => {
		try {
			// aka Postman Query
			const response = await fetch('/api/bookmarks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(singleBookmark)
			});

			// recieve data & turn it into js object/array
			const data = await response.json();

			// sort bookmarks by date, descending
			const resortedData = [...bookmarks, data].sort(function(a, b) {
				if (a.updatedAt > b.updatedAt) return -1;
				if (a.updatedAt < b.updatedAt) return 1;
				return 0;
			});

			// move that js object/array into state & db
			setBookmarks(resortedData);
		} catch (error) {
			// display error for backend developer
			console.error(error);
			// display error for front end developer
			res.status(404).json({
				message: error.message
			});
		}
	};

	return (
		<>
			<Header />
			<div className="container mt-3" id="main">
				<main className="row">
					<BookmarkList bookmarks={bookmarks} />
					<AddBookmark handleData={postBookmark} />
				</main>
			</div>
		</>
	);
}
