import types from "../types";

export const loaderOn = () => ({
  type: types.setLoaderOn,
  payload: true,
});

export const loaderOff = () => ({
  type: types.setLoaderOff,
  payload: false,
});
