// redux
import { combineReducers } from "redux";

// reducers
import categoriesReducer from "./Reducers/CategoriesReducer/reducer";

// CombineAllReducers
const AllReducers = combineReducers({
  categoriesReducer,
});

export default AllReducers;
