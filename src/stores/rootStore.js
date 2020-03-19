import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './rootReducer';

const store = (initialState = {}, options) => {
	return createStore(
		reducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunk))
	);
};

export default store;
