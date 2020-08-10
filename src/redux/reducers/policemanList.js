import policeList from "../../database/police.json";

const initialState = policeList;

export const policeListReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
