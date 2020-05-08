import { combineReducers } from 'redux';
import authReducer from './auth/AuthReducer';
import registerReducer from './register/RegisterReducer';
import clientReducer from './client/ClientReducer';

export default combineReducers({
	auth: authReducer,
	client: clientReducer,
	register: registerReducer,
});
