import { writable } from "svelte/store";

export const isContactVisible = writable(false);
export const isMenuVisible = writable(false);

export const client = writable({
  name: "",
  email: "",
  message: "",
});

export const getClient = () => get(client);
