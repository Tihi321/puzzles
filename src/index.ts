import "./styles/core.scss";

import { domReady } from "tsl-utils";

import App from "./App.svelte";

domReady(() => {
  const appElement = document.querySelector(".app");

  new App({
    target: appElement,
  });
});
