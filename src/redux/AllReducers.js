// redux
import { combineReducers } from "redux";

// reducers
import categoriesReducer from "./Reducers/CategoriesReducer/reducer";
import firebaseReducer from "./Reducers/FirebaseReducer/reducer";

// CombineAllReducers
const AllReducers = combineReducers({
  categoriesReducer,
  firebaseReducer,
});

export default AllReducers;
