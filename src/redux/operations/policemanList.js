import { getList } from "../../helpers/fetch";
import { loadListToState } from "../actions/policemanList";

export const getListFromDb = () => async (dispatch) => {
  try {
    const { data } = await getList();
    dispatch(loadListToState(data));
  } catch (error) {
    console.error(error);
  }
};
