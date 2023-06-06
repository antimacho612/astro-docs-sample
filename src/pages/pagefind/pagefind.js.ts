import type { APIContext } from "astro";

// eslint-disable-next-line no-empty-pattern
export async function get({}: APIContext) {
  return {
    body: "export const search = () => {return {results: []}}",
  };
}
