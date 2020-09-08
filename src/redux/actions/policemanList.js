import types from "../types";

export const addStory = (id, story) => ({
  type: types.addStoryToList,
  payload: { id, story },
});

export const loadListToState = (list) => ({
  type: types.loadPolicemanList,
  payload: list,
});
