import * as server from '../entries/pages/singup/_page.server.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/singup/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/singup/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.bed09eed.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.d6013ad1.js","_app/immutable/chunks/forms.6b4dc3a3.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.4aed4274.js"];
export const stylesheets = [];
export const fonts = [];
