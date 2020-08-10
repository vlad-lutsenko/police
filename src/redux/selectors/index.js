import { createSelector } from "reselect";

export const policemanListSelector = (state) => state.policeList;
export const policemanListFilterSelector = (state) => state.policemanListFilter;

export const filteredPolicemanList = createSelector(
  [policemanListSelector, policemanListFilterSelector],
  (list, filter) => {
    return list.filter(
      (policeman) =>
        policeman.surname.toLowerCase().includes(filter.toLowerCase().trim()) ||
        policeman.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
        policeman.department
          .toLowerCase()
          .includes(filter.toLowerCase().trim()) ||
        policeman.death.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);
