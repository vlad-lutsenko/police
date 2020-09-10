import types from "../types";

export const offerStorySendOn = () => ({
  type: types.offerSendOn,
  payload: true,
});

export const offerStorySendOff = () => ({
  type: types.offerSendOff,
  payload: false,
});
