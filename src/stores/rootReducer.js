import { combineReducers } from 'redux';
import authReducer from './auth/AuthReducer';
import registerReducer from './register/RegisterReducer';
import surveyReducer from './survey/SurveyReducer';

export default combineReducers({
	auth: authReducer,
	register: registerReducer,
	survey: surveyReducer,
});
