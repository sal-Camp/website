import{w as M,r as S}from"./index.5f8255c3.js";import{a0 as P}from"./scheduler.dd0bf361.js";const l={};function h(e){return e==="local"?localStorage:sessionStorage}function i(e,t,s){const r=(s==null?void 0:s.serializer)??JSON,m=(s==null?void 0:s.storage)??"local";function u(n,c){h(m).setItem(n,r.stringify(c))}if(!l[e]){const n=M(t,o=>{const a=h(m).getItem(e);a&&o(r.parse(a));{const g=d=>{d.key===e&&o(d.newValue?r.parse(d.newValue):null)};return window.addEventListener("storage",g),()=>window.removeEventListener("storage",g)}}),{subscribe:c,set:f}=n;l[e]={set(o){u(e,o),f(o)},update(o){const a=o(P(n));u(e,a),f(a)},subscribe:c}}return l[e]}const L=i("modeOsPrefers",!1),v=i("modeUserPrefers",void 0),p=i("modeCurrent",!1);function C(){const e=window.matchMedia("(prefers-color-scheme: light)").matches;return L.set(e),e}function b(e){v.set(e)}function I(e){const t=document.documentElement.classList,s="dark";e===!0?t.remove(s):t.add(s),p.set(e)}function O(){const e=document.documentElement.classList,t=localStorage.getItem("modeUserPrefers")==="false",s=!("modeUserPrefers"in localStorage),r=window.matchMedia("(prefers-color-scheme: dark)").matches;t||s&&r?e.add("dark"):e.remove("dark")}const w="(prefers-reduced-motion: reduce)";function E(){return window.matchMedia(w).matches}const R=S(E(),e=>{{const t=r=>{e(r.matches)},s=window.matchMedia(w);return s.addEventListener("change",t),()=>{s.removeEventListener("change",t)}}});export{I as a,b,C as g,p as m,R as p,O as s};
