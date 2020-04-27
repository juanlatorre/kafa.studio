import { writable } from "svelte/store";

export const isContactVisible = writable(false);
export const isMenuVisible = writable(false);

export const client = writable({
  name: "Nombre",
  email: "tu@correo.com",
  message: "Mensaje",
});

export const getClient = () => get(client);
