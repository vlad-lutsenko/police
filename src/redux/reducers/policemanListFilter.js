import types from "../types";

const initialState = "";

export const policemanListFilter = (state = initialState, action) => {
  switch (action.type) {
    case types.changePolicemanListFilter:
      return action.payload;

    default:
      return state;
  }
};
