import types from "../types";

export const loadListToState = (list) => ({
  type: types.loadPolicemanList,
  payload: list,
});
