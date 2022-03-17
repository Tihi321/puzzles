import { writable } from "svelte/store";

export const api = writable({
  name: undefined,
  endpoint: undefined,
});
