import React, { Fragment, useState } from 'react';

export default function AddBookmark({ handleData }) {
	// set single bookmark state
	const [singleBookmark, setBookmark] = useState({
		title: '',
		url: 'http://',
		tags: ['']
	});

	// capture data in textfields
	const handleChange = e => {
		if (e.target.id == 'tags') {
			// let tagsArray = e.target.value.split(' ');
			setBookmark({
				...singleBookmark,
				[e.target.id]: e.target.value.split(',')
			});
		} else {
			setBookmark({ ...singleBookmark, [e.target.id]: e.target.value });
		}
	};

	const handleSubmit = e => {
		e.preventDefault();

		// error handling
		if (!singleBookmark.title) {
			alert('Please add a title before saving.');
			return;
		}

		if (!singleBookmark.url) {
			alert('Please add a URL before saving.');
			return;
		}

		// send form data to postBookmark function in App
		handleData(singleBookmark);

		// clear out state
		setBookmark({
			title: '',
			url: '',
			tags: ['']
		});
	};

	return (
		<div className="col-12 col-md-5 col-lg-4">
			<div className="card mt-1">
				<div className="card-body">
					<h5 className="card-title">Add a new bookmark:</h5>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<input
								type="text"
								className="form-control mb-3"
								id="title"
								placeholder="Website"
								value={singleBookmark.title}
								onChange={handleChange}
							/>
							<input
								type="text"
								className="form-control mb-3"
								id="url"
								placeholder="URL"
								value={singleBookmark.url}
								onChange={handleChange}
							/>
							<textarea
								rows="5"
								className="form-control mb-3"
								id="tags"
								placeholder="Tags (comma separated)"
								value={singleBookmark.tags}
								onChange={handleChange}
							/>
							<input
								type="submit"
								value="Add Bookmark"
								className="btn btn-primary"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
