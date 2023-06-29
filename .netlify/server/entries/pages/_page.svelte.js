import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-yyjjjs">Welcome to SvelteKit</h1> <p data-svelte-h="svelte-jl9sbz">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> <ul data-svelte-h="svelte-i6kc58"><form method="POST"><li><a href="/">Home</a></li> <li><a href="/login">Login</a></li> <li><a href="/singup">Register</a></li> <li><button formaction="/singout" type="submit">Logout</button></li></form></ul> <button class="btn" data-svelte-h="svelte-1ogrqup">Hello daisyui</button> <h1 class="text-3xl font-bold underline" data-svelte-h="svelte-bk5epg">Hello world!</h1> <button class="btn btn-primary" data-svelte-h="svelte-9jdat2">Button</button>`;
});
export {
  Page as default
};
