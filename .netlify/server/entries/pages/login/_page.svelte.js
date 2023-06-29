import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><h1 data-svelte-h="svelte-gn9sfy">Sign in</h1> <form method="POST" data-svelte-h="svelte-vfirwr"><label for="username">Username</label><br> <input id="username" name="username"><br> <label for="password">Password</label><br> <input type="password" id="password" name="password"><br> <input type="submit" value="Continue"></form></div>`;
});
export {
  Page as default
};
