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
				setBookmarks(data);
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

			// move that js object/array into state & db
			setBookmarks([...bookmarks, data]);
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
