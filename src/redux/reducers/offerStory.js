import types from "../types";

const initialState = false;

export const offerStoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.offerSendOn:
      return action.payload;

    case types.offerSendOff:
      return action.payload;

    default:
      return state;
  }
};
