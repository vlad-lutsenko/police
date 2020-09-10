import { getList, getPoliceman, offerStory } from "../../helpers/fetch";
import { loadListToState } from "../actions/policemanList";
import { setPolicemanToState } from "../actions/policeman";
import { loaderOn, loaderOff } from "../actions/loader";
import { offerStorySendOn } from "../actions/offerStory";

export const getListFromDb = () => async (dispatch) => {
  dispatch(loaderOn());
  try {
    const { data } = await getList();
    dispatch(loadListToState(data));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(loaderOff());
  }
};

export const getPolicemanFromDb = (number) => async (dispatch) => {
  dispatch(loaderOn());
  try {
    const { data } = await getPoliceman(number);
    dispatch(setPolicemanToState(data[0]));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(loaderOff());
  }
};

export const offerResponse = (number, story) => async (dispatch) => {
  dispatch(loaderOn());
  try {
    const { data } = await offerStory(number, story);
    console.log(data);
    dispatch(offerStorySendOn());
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(loaderOff());
  }
};
