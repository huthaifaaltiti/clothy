// Categories reducer Constants
import * as CATEGORIES_CONSTANTS from "./constants";

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: CATEGORIES_CONSTANTS.CATEGORIES_FETCH_DATA_REQUEST,
    });

    const response = await fetch("categories.json");
    const dataResponse = await response.json();

    console.log(dataResponse.categories);

    dispatch({
      type: CATEGORIES_CONSTANTS.CATEGORIES_FETCH_DATA_SUCCESS,
      payload: dataResponse.categories,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIES_CONSTANTS.CATEGORIES_FETCH_DATA_FAILURE,
      payload: error.message,
    });
  }
};
