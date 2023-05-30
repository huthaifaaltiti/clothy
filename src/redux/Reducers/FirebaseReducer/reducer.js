// Firebase reducer constants
import * as FIREBASE_CONSTANTS from "./constants";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

// Firebase Reducer
const firebaseReducer = (state = initialState, action) => {
  switch (action.type) {
    
    default:
      return state;
  }
};

export default firebaseReducer;
