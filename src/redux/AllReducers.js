// redux
import { combineReducers } from "redux";

// reducers
import CategoriesReducer from "./Reducers/CategoriesReducer/reducer";

// CombineAllReducers
const AllReducers = combineReducers({
  CategoriesReducer,
});

export default AllReducers;
