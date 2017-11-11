import { combineReducers } from 'redux';

const searchResults = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducer = combineReducers({
  searchResults,
});

export default reducer;
