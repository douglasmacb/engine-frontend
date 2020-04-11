import { categoryReducer } from './categoryReducer';
import { combineReducers } from 'redux';

export const reducers = combineReducers({
  categoryState: categoryReducer
});
