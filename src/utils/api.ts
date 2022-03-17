import lowerCase from "lodash/lowerCase";

import { EGames, Endpoints } from "../constants";

export const getGameSearchName = (name: string) => {
  switch (lowerCase(name)) {
    case EGames.Krizko:
      return EGames.Krizko;
    case EGames.Recko:
      return EGames.Recko;

    default:
      return EGames.Krizko;
  }
};

export const getGameEndpoint = (name: string) => {
  switch (name) {
    case EGames.Krizko:
      return Endpoints.Krizko;
    case EGames.Recko:
      return Endpoints.Recko;

    default:
      return Endpoints.Krizko;
  }
};
