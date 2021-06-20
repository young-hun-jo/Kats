(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5012],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return p}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,g=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return t?a.createElement(g,l(l({ref:n},s),{},{components:t})):a.createElement(g,l({ref:n},s))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3899:function(e,n,t){"use strict";t.d(n,{Z:function(){return c},T:function(){return u}});var a=t(2122),r=t(7294),i=t(6742),l=t(2263),o=t(907);function c(e){return r.createElement(i.Z,(0,a.Z)({},e,{to:(n=e.to,c=(0,o.zu)(),(0,l.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==c?void 0:c.name)?t:"current"]+n),target:"_blank"}));var n,t,c}function u(e){var n,t=null!=(n=e.text)?n:"Example";return r.createElement(c,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example"}))}},1027:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),l=(t(3899),["components"]),o={id:"configuring_plugins",title:"Configuring Plugins"},c={unversionedId:"patterns/configuring_plugins",id:"patterns/configuring_plugins",isDocsHomePage:!1,title:"Configuring Plugins",description:"Hydra plugins usually comes with sensible defaults which works with minimal configuration.",source:"@site/docs/patterns/configuring_plugins.md",sourceDirName:"patterns",slug:"/patterns/configuring_plugins",permalink:"/Kats/docs/next/patterns/configuring_plugins",editUrl:"https://github.com/facebookresearch/kats/edit/master/website/docs/patterns/configuring_plugins.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1619718001,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"configuring_plugins",title:"Configuring Plugins"}},u=[{value:"Overriding in primary config",id:"overriding-in-primary-config",children:[]},{value:"Extending plugin default config",id:"extending-plugin-default-config",children:[]}],s={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hydra plugins usually comes with sensible defaults which works with minimal configuration.\nThere are two primary ways to customize the configuration of a plugin:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Overriding it directly in your primary config"),(0,i.kt)("li",{parentName:"ul"},"Extending the config and using it from your primary config.")),(0,i.kt)("p",null,"The first method is the simpler, but it makes it harder to switch to a different plugin configuration.\nThe second method is a bit more complicated, but makes it easier to switch between different plugin configurations."),(0,i.kt)("p",null,"The following methods apply to all Hydra plugins. In the following examples, we will configure a imaginary Launcher plugin\n",(0,i.kt)("inlineCode",{parentName:"p"},"MoonLauncher"),". The Launcher has two modes: ",(0,i.kt)("inlineCode",{parentName:"p"},"falcon9"),", which actually launches the application to the Moon and\n",(0,i.kt)("inlineCode",{parentName:"p"},"sim")," which simulates a launch."),(0,i.kt)("p",null,"The config schema for MoonLauncher looks like:"),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@dataclass\nclass Falcon9Conf:\n  ton_fuel:  int = 10\n\n\n\n\n"))),(0,i.kt)("div",{className:"col  col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@dataclass\nclass Simulation:\n  ton_fuel:  int = 10\n  window_size:\n    width: 1024\n    height: 768\n\n")))),(0,i.kt)("h3",{id:"overriding-in-primary-config"},"Overriding in primary config"),(0,i.kt)("p",null,"We can directly override Launcher config in primary config."),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--4"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"a: 1\n\nhydra:\n  launcher:\n    ton_fuel: 2\n\n\n\n\n\n\n\n\n\n"))),(0,i.kt)("div",{className:"col col--4"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline",metastring:'title="command-line override"',title:'"command-line','override"':!0},"hydra/launcher=falcon9\n\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="resulting launcher config"  {3}',title:'"resulting',launcher:!0,'config"':!0,"":!0,"{3}":!0},"hydra:\n  launcher:\n    ton_fuel: 2\n\n\n\n"))),(0,i.kt)("div",{className:"col col--4"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline",metastring:'title="command-line override"',title:'"command-line','override"':!0},"hydra/launcher=sim\n\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="resulting launcher config"  {3}',title:'"resulting',launcher:!0,'config"':!0,"":!0,"{3}":!0},"hydra:\n  launcher:\n    ton_fuel: 2\n    window_size:\n      width: 1024\n      height: 768\n")))),(0,i.kt)("p",null,"This approach makes the assumption that the Launcher used has all the fields we are overriding.\nIf we wanted to override a field that exists in the Simulation Launcher but not in the Falcon9 Launcher,\nlike ",(0,i.kt)("inlineCode",{parentName:"p"},"window_size.width"),", we would no longer be able to use the Falcon9 Launcher! The next section solves this problem."),(0,i.kt)("h3",{id:"extending-plugin-default-config"},"Extending plugin default config"),(0,i.kt)("p",null,"This section assumes that you are familiar with the contents of ",(0,i.kt)("a",{parentName:"p",href:"/Kats/docs/next/patterns/extending_configs"},"Common Patterns/Extending Configs"),"."),(0,i.kt)("p",null,"Extending plugin default config has several advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Separate configuration concerns, keep primary config clean."),(0,i.kt)("li",{parentName:"ul"},"Easier to switch between different plugin configurations."),(0,i.kt)("li",{parentName:"ul"},"Provides flexibility when a Plugin has different modes\nthat requires different schema.")),(0,i.kt)("p",null,"Say that we want to override certain values for different Launcher mode:"),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hydra/launcher/my_falcon9.yaml" {4}',title:'"hydra/launcher/my_falcon9.yaml"',"{4}":!0},"defaults:\n  - falcon9\n\nton_fuel: 2\n\n\n"))),(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hydra/sweeper/my_sim.yaml" {5}',title:'"hydra/sweeper/my_sim.yaml"',"{5}":!0},"defaults:\n  - sim\n\nwindow_size:\n  width: 768\n\n")))),(0,i.kt)("p",null,"We can easily user command-line overrides to get the configuration needed:"),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline",metastring:'title="command-line override"',title:'"command-line','override"':!0},"hydra/launcher=my_falcon9\n\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="resulting launcher config"  {3}',title:'"resulting',launcher:!0,'config"':!0,"":!0,"{3}":!0},"hydra:\n  launcher:\n    ton_fuel: 2\n\n\n\n"))),(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline",metastring:'title="command-line override"',title:'"command-line','override"':!0},"hydra/launcher=my_sim\n\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="resulting launcher config"  {5}',title:'"resulting',launcher:!0,'config"':!0,"":!0,"{5}":!0},"hydra:\n  launcher:\n    ton_fuel: 10\n    window_size:\n      width: 768\n      height: 768\n")))))}m.isMDXComponent=!0}}]);