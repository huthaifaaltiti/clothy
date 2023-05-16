// Categories Reducer Constants
import * as CATEGORIES_CONSTANTS from "./constants";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

// Categories Reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_CONSTANTS.CATEGORIES_FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CATEGORIES_CONSTANTS.CATEGORIES_FETCH_DATA_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };

    case CATEGORIES_CONSTANTS.CATEGORIES_FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
