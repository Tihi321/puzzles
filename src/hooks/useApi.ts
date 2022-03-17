import isEqual from "lodash/isEqual";

import { api } from "../store/api";
import { getGameEndpoint, getGameSearchName } from "../utils";

export const useApi = () => {
  const { set } = api;
  const setApiEndpoint = (name: string, oldEndpoint: string) => {
    const endpoint = getGameEndpoint(name);
    if (!isEqual(endpoint, oldEndpoint)) {
      set({ endpoint, name });
    }
  };
  const setApiSearchEndpoint = (searchName: string) => {
    const name = getGameSearchName(searchName);
    const endpoint = getGameEndpoint(name);
    set({ endpoint, name });
  };
  return {
    api,
    setApiEndpoint,
    setApiSearchEndpoint,
  };
};
