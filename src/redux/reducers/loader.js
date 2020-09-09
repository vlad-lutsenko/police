import types from "../types";
const initialState = false;

export const loader = (state = initialState, action) => {
  switch (action.type) {
    case types.setLoaderOn:
      return true;
    case types.setLoaderOff:
      return false;
    default:
      return state;
  }
};
