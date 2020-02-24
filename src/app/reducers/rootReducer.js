import { combineReducers } from "redux";
import testReducer from "../../features/testArea/testReducer";
import bookReducer from "../../features/book/bookReducer";

const rootReducer = combineReducers({
  test: testReducer,
  books: bookReducer
});

export default rootReducer;