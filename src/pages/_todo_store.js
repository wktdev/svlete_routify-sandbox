import { writable } from 'svelte/store';

export const todoStore = writable(["one","two","three"]);