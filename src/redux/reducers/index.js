import { combineReducers } from "redux";
import { policeListReducer } from "./policemanList";
import { policemanReducer } from "./policeman";
import { policemanListFilter } from "./policemanListFilter";
import { loader } from "./loader";
import { offerStoryReducer } from "./offerStory";

const rootReducer = combineReducers({
  policeList: policeListReducer,
  policeman: policemanReducer,
  policemanListFilter,
  loader,
  offerStory: offerStoryReducer,
});

export default rootReducer;
