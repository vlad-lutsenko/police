import types from "../types";
const initialState = {};

export const policemanReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadPoliceman:
      return action.payload;

    default:
      return state;
  }
};
