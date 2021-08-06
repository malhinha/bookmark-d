import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import UpdateBookmark from '../components/UpdateBookmark';

export default function Show(props) {
	// set bookmark state
	const [bookmark, setBookmark] = useState({});
	// set show update form state
	const [showForm, setShowForm] = useState(false);

	// fetch & display
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/bookmarks/${props.match.params.id}`);
				const data = await response.json();
				setBookmark(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	// update bookmark
	const putBookmark = async (newTitle, newUrl) => {
		try {
			const response = await fetch(`/api/bookmarks/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: newTitle,
					url: newUrl
				})
			});
			const data = await response.json();
			setBookmark(data);
		} catch (error) {
			console.error(error);
		}
	};

	const toggleForm = () => {
		if (!showForm) {
			setShowForm(true);
		} else {
			setShowForm(false);
		}
	};

	// delete bookmark
	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/bookmarks/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const deletedBookmark = await response.json();
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};

	return (
		<div>
			<Link to={'/'}>
				<button>Back to list</button>
			</Link>

			{Object.keys(bookmark).length ? (
				<>
					<h3>{bookmark.title}</h3>
					<p>
						<a href={bookmark.url} target="_blank">
							{bookmark.url}
						</a>
					</p>

					<button onClick={toggleForm}>Edit</button>
					<button onClick={handleDelete}>Delete</button>
				</>
			) : (
				<h1> Loading...</h1>
			)}

			{showForm && (
				<UpdateBookmark bookmark={bookmark} handleData={putBookmark} />
			)}
		</div>
	);
}
