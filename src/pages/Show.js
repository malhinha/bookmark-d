import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import UpdateBookmark from '../components/UpdateBookmark';
import BookmarkDetail from '../components/BookmarkDetail';

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

	// toggle display of update form
	const toggleForm = () => {
		if (!showForm) {
			setShowForm(true);
		} else {
			setShowForm(false);
		}
	};

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
		<>
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-12 mt-4 mb-4">
						<Link to={'/'}>
							<button className="btn btn-outline-primary">Back to list</button>
						</Link>
					</div>
				</div>
				{Object.keys(bookmark).length ? (
					<>
						<BookmarkDetail
							bookmark={bookmark}
							toggleForm={toggleForm}
							handleDelete={handleDelete}
						/>
					</>
				) : (
					<div className="col-12">
						<h1> Loading...</h1>
					</div>
				)}

				{showForm && (
					<UpdateBookmark bookmark={bookmark} handleData={putBookmark} />
				)}
			</div>
		</>
	);
}
