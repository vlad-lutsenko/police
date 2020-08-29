import policeList from "../../database/police.json";
import types from "../types";

const initialState = policeList;

export const policeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addStoryToList:
      const policeman = state.find(
        (policeman) => policeman.number === action.payload.id
      );
      policeman.story.push(action.payload.story);

      return state;

    default:
      return state;
  }
};
