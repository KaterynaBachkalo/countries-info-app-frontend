import{j as s,r as o,T as r}from"./index-BnsZ6X_I.js";const c=e=>e.country.availableCountries,l=e=>e.country.flagUrl,i=e=>{var t;return(t=e.country.borders)==null?void 0:t.borders},m=e=>{var t;return(t=e.country.borders)==null?void 0:t.commonName},u=e=>e.country.population,h=e=>e.country.isLoading,d=({errorText:e})=>s.jsxs("p",{className:"error",children:["No ",e," data :("]}),n=()=>{const e=o.useContext(r);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},b=()=>{const{theme:e,toggleTheme:t}=n();return s.jsxs("div",{className:"theme-buttons",children:[s.jsx("button",{type:"button",className:`theme ${e==="light"?"dark":"light"}`,onClick:t,children:"Light Theme"}),s.jsx("button",{type:"button",className:`theme ${e==="dark"?"dark":"light"}`,onClick:t,children:"Dark Theme"})]})};export{d as E,b as S,h as a,l as b,i as c,m as d,u as e,c as s};
