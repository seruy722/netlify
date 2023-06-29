export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.eb01b9e4.js","app":"_app/immutable/entry/app.40dfe50a.js","imports":["_app/immutable/entry/start.eb01b9e4.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/singletons.4aed4274.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.40dfe50a.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.d6013ad1.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/singout",
				pattern: /^\/singout\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/singout/_server.ts.js')
			},
			{
				id: "/singup",
				pattern: /^\/singup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
