import types from "../types";

export const setPolicemanToState = (policeman) => ({
  type: types.loadPoliceman,
  payload: policeman,
});

// export const addStoryToList = ()
