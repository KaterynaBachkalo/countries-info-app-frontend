import{u as o,j as s,L as r,a as n}from"./index-CqvYprFy.js";import{s as i,a as l,E as c}from"./ErrorText-bIlWb1IV.js";const x=()=>{const e=o(i),t=o(l);return s.jsxs("section",{className:"container",children:[s.jsx("h1",{className:"main-title",children:"List of available countries"}),t&&s.jsx(r,{}),!t&&s.jsx("ul",{className:"country-list",children:e.length!==0?e==null?void 0:e.map(a=>s.jsx(n,{to:`/country-info-page/${a.countryCode}`,className:"country-link",children:s.jsx("li",{children:a.name})},a.countryCode)):s.jsx(c,{errorText:"country list"})})]})};export{x as default};
