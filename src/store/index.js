import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { movieReducer } from '../store/movieReducer';
import { saveState } from '../store/movieReducer';
import { oldState } from '../store/movieReducer';


const rootReducer = combineReducers ({
   movies: movieReducer,
})







export const store = createStore(rootReducer, oldState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
   saveState(store.getState());
});
