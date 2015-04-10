# floatforms

floatforms is a jQuery plugin to make long forms a bit nicer to fill out.
Currently only works for `<input>` elements.

Demo and more at the [homepage](http://uhkis.github.io/floatforms/)

### Usage

Link the js (and optionally css) file(s) to your page:
```html
<script src="js/floatforms.js"></script>
<link rel="stylesheet" href="css/floatforms.css">
```

Add an element as your floatbox, ~~currently id must be floatbox~~ id by default is floatbox, but selector can be changed via options.
```html
<div id="floatbox"></div>
```

Run the floatforms function on your form: `$('#yourform').floatforms(options);`

##### Options

Options are passed as an object with key-value pairs.

Defaults:
```js
var options = {
  animate: true,
  floatbox: '#floatbox',
  boxClass: 'floatbox',
};
```

key | value
--- | ---
`animate` | boolean to animate or not
`floatbox` | string css selector for floatbox
`boxClass` | string class name of floatbox


### Issues/Suggestions

Create a [GitHub issue](https://github.com/Uhkis/floatforms/issues)
