import { FETCH_USER } from '../actions/types';

//set state to null: represents awaiting a login result
// return values are null, false or the user model. 
// value has not yet returned, value is invalid, value is valid(authenticated)
export default function (state = null, action){

	switch (action.type){
		case FETCH_USER:
            return action.payload || false; // empty string are 'false' values
		default:
			return state;
	}
}