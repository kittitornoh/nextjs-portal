import { combineReducers } from 'redux';
import authReducer from './auth/AuthReducer';
import registerReducer from './register/RegisterReducer';
import profileReducer from './profile/ProfileReducer';

export default combineReducers({
	auth: authReducer,
	register: registerReducer,
	profile: profileReducer,
});
