import React, { useState, useEffect } from 'react';
import BookmarkList from '../components/BookmarkList';

export default function App() {
	const [bookmarks, setBookmarks] = useState([]);

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

	return (
		<div className="AppPage">
			<h1>Bookmarks</h1>
			<BookmarkList bookmarks={bookmarks} />
		</div>
	);
}
