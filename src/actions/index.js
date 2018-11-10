import axios from 'axios';
import { FETCH_USER } from './types';

// const fetchUser = () => {
// 	axios.get('/api/current_user');
// };

//refactor to use redux thunk

// export const fetchUser = () => {
// 	return async function(dispatch) {
// 		let res = await axios.get('/api/current_user');
// 		dispatch({
// 			type: FETCH_USER,
// 			payload:res
// 		});
// 	};
// };

// refactor - if an arrow function has but one expression within (which is also a function), it can be further simplified with another arrow function

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({
		type: FETCH_USER,
		payload:res.data
	});
};

export const handleToken = (token) => async dispatch => {
	const res = await axios.post('/api/stripe', token);

	dispatch({type:FETCH_USER, payload:res.data})
};