import React from 'react';
import Helmet from 'react-helmet';
import { Button, Typography } from '@material-ui/core';
import { useLocalState } from 'utils/store';
import { actionCreators, reducer } from 'store/Counter';

const Counter = () => {
	const [state, actions] = useLocalState(reducer, actionCreators);

	return (
		<>
			<Helmet
				title={'Counter - React with Typescript and Webpack'}
				meta={[
					{
						name: 'description',
						content: 'Counter - React with Typescript and Webpack'
					}
				]}
			/>
			<Typography variant="h1">Counter Page</Typography>
			<Typography variant="h3">
				Current count: <strong>{state.count}</strong>
			</Typography>
			<br />
			<Button variant="outlined" color="primary" onClick={() => actions.increment()}>
				Increment
			</Button>
			<Button variant="outlined" color="primary" onClick={() => actions.decrement()}>
				Decrement
			</Button>
		</>
	);
};

export default Counter;
