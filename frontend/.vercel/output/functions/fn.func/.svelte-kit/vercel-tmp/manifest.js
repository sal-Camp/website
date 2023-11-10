export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["avatar.jpg","favicon.png","fonts/SpaceGrotesk.ttf"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.5fd49b91.js","app":"_app/immutable/entry/app.bc6764e6.js","imports":["_app/immutable/entry/start.5fd49b91.js","_app/immutable/chunks/scheduler.dd0bf361.js","_app/immutable/chunks/singletons.0fea951f.js","_app/immutable/chunks/index.5f8255c3.js","_app/immutable/entry/app.bc6764e6.js","_app/immutable/chunks/scheduler.dd0bf361.js","_app/immutable/chunks/index.18eacb1b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
