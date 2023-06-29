import * as server from '../entries/pages/login/_page.server.ts.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.b644f238.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.d6013ad1.js","_app/immutable/chunks/forms.6b4dc3a3.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.4aed4274.js"];
export const stylesheets = [];
export const fonts = [];
