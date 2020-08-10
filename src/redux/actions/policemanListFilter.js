import types from "../types";

export const setFilter = (filter) => ({
  type: types.changePolicemanListFilter,
  payload: filter,
});
