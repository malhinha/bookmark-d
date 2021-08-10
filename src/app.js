import React from 'react';

// Import React route, switch
import { Route, Switch } from 'react-router-dom';

// Import page components
import Main from './pages/Main';
import Show from './pages/Show';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<Main />
				</Route>
				<Route
					path={'/:id'}
					render={routerProps => <Show {...routerProps} />}
				></Route>
			</Switch>
		</div>
	);
}

export default App;
