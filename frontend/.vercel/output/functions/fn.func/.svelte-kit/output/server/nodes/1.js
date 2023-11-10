

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.86d59485.js","_app/immutable/chunks/scheduler.dd0bf361.js","_app/immutable/chunks/index.18eacb1b.js","_app/immutable/chunks/singletons.0fea951f.js","_app/immutable/chunks/index.5f8255c3.js"];
export const stylesheets = [];
export const fonts = [];
