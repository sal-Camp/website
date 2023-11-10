import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.b9c263c3.js","_app/immutable/chunks/scheduler.dd0bf361.js","_app/immutable/chunks/index.18eacb1b.js","_app/immutable/chunks/index.5f8255c3.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.7ca6b83f.js"];
export const stylesheets = ["_app/immutable/assets/0.a2cbed62.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
