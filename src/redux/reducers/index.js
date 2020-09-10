import { combineReducers } from "redux";
import { policeListReducer } from "./policemanList";
import { policemanReducer } from "./policeman";
import { loader } from "./loader";
import { offerStoryReducer } from "./offerStory";

const rootReducer = combineReducers({
  policeList: policeListReducer,
  policeman: policemanReducer,
  loader,
  offerStory: offerStoryReducer,
});

export default rootReducer;
