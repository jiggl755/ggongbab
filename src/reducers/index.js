import { combineReducers } from 'redux';
import books from './books';
import { connectRouter } from 'connected-react-router';

const reducer = history =>
  combineReducers({
    books,
    router: connectRouter(history),
  });

export default reducer;
