// import policeList from "../../database/police.json";
// const initialState = policeList;

import types from "../types";
const initialState = [];

export const policeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addStoryToList:
      const policeman = state.find(
        (policeman) => policeman.number === action.payload.id
      );
      policeman.story.push(action.payload.story);

      return state;

    case types.loadPolicemanList:
      return action.payload;

    default:
      return state;
  }
};
