(this["webpackJsonpdemo-box"]=this["webpackJsonpdemo-box"]||[]).push([[4],{148:function(n,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c}));var t=r(149),a=r(0),o=r(131),i=Object(o.a)((function(n){return{contentRoot:{width:"100%",padding:20,overflowY:"scroll","&::-webkit-scrollbar":{width:3},"&::-webkit-scrollbar-track":{background:"#FF8E53"},"&::-webkit-scrollbar-thumb":{background:"linear-gradient(45deg, #F50057 10%, #FF8E53 90%)"}},markdownPre:{border:"1px solid #DDDDDD",borderLeft:"2px solid #FF8E53"}}})),l=function(n){var e=n.children,r=i();return function(n){var e=document.createElement("script");e.async=!1,e.src=n,document.getElementsByTagName("body")[0].appendChild(e)}("https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"),a.createElement("div",{className:"".concat(r.contentRoot," markdown-body")},e)},c=function(n){var e=n.path,r=i();return a.createElement(t.a,{options:{overrides:{pre:{component:"",props:{className:"".concat(r.markdownPre)}},code:{component:"",props:{className:"prettyprint"}}}}},e)}},56:function(n,e,r){"use strict";r.r(e);var t=r(0),a=r(151),o=r(148),i=function(){return t.createElement(t.Fragment,null,t.createElement("h1",null,"JSX Component"),t.createElement(a.a,{variant:"contained",onClick:function(){return alert("clicked")}},"Default"),t.createElement(a.a,{variant:"contained",color:"primary",href:"#contained-buttons"},"Link"))};e.default=function(n){return t.createElement(o.a,n,t.createElement(o.b,{path:"\n# In-line Markdown\n## In-line Markdown\n### In-line Markdown\n#### In-line Markdown\n##### In-line Markdown\n###### In-line Markdown\n\n>Some reference\n\n```\nconst data = 'sample';\n```\n"}),t.createElement("hr",null),t.createElement(i,null),t.createElement("hr",null),t.createElement(o.b,{path:"# Stand Alone Markdown\r\n\r\nThis is a demo\r\n\r\nThis demo is using [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) styles, google code syntax highlighting styles [code-prettify](https://github.com/googlearchive/code-prettify)\r\n\r\n## Description\r\n\r\nSome description with `in-line label`.\r\n\r\n>Some reference\r\n\r\n- ItemA\r\n- ItemB\r\n  - SubItemA\r\n  - SubItemB\r\n- ItemC\r\n\r\n[ ] 1.checkbox  \r\n[x] 2.checkbox\r\n\r\n## Code\r\n\r\n```js\r\nconst value = 'demo';\r\n```\r\n\r\n```html\r\n<Tabs\r\n  orientation='vertical'\r\n  variant='scrollable'\r\n  value={value}\r\n  onChange={handleChange}\r\n  aria-label='Vertical tabs'\r\n  className={classes.tabs}\r\n>\r\n  {displayList.map((x, idx) => (\r\n    <Tab\r\n      label={x.name.replace(/([A-Z])/g, ' $1').trim()}\r\n      component={Link}\r\n      to={`/${x.name}`}\r\n      key={x.id}\r\n      {...generateProps(idx)}\r\n    />\r\n  ))}\r\n</Tabs>\r\n```\r\n\r\n## Demo\r\n\r\ncodesandbox iframe\r\n\r\n<iframe\r\n  src=\"https://codesandbox.io/embed/bold-perlman-h0m28?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=light&view=preview\"\r\n  style=\"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\r\n  title=\"bold-perlman-h0m28\"\r\n  allow=\"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking\"\r\n  sandbox=\"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts\"\r\n></iframe>\r\n"}))}}}]);
//# sourceMappingURL=4.c94604d6.chunk.js.map