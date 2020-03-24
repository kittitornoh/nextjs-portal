import { combineReducers } from 'redux';
import authReducer from './auth/AuthReducer';
import registerReducer from './register/RegisterReducer';

export default combineReducers({
	auth: authReducer,
	register: registerReducer
});
