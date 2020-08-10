import { combineReducers } from "redux";
import { policeListReducer } from "./policemanList";
import { policemanListFilter } from "./policemanListFilter";

const rootReducer = combineReducers({
  policeList: policeListReducer,
  policemanListFilter,
});

export default rootReducer;
