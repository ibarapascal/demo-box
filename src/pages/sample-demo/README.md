# Sample Demo

This is a demo

This demo is using [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) styles, google code syntax highlighting styles [code-prettify](https://github.com/googlearchive/code-prettify)

## Description

Some description with `in-line label`.

>Some reference

- ItemA
- ItemB
  - SubItemA
  - SubItemB
- ItemC

[ ] 1.checkbox  
[x] 2.checkbox

## Code

```js
const value = 'demo';
```

```html
<Tabs
  orientation='vertical'
  variant='scrollable'
  value={value}
  onChange={handleChange}
  aria-label='Vertical tabs'
  className={classes.tabs}
>
  {displayList.map((x, idx) => (
    <Tab
      label={x.name.replace(/([A-Z])/g, ' $1').trim()}
      component={Link}
      to={`/${x.name}`}
      key={x.id}
      {...generateProps(idx)}
    />
  ))}
</Tabs>
```

## Demo

codesandbox iframe

<iframe
  src="https://codesandbox.io/embed/laughing-browser-g9o13?fontsize=14&hidenavigation=1&theme=light&view=preview"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="laughing-browser-g9o13"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
