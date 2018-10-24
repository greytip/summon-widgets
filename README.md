# Summon Widgets

A collection of useful widgets.

## Usage

To use widgets in browser, plesae follow instruction below:

1. Add the `script` tag in your web as below.

```html
<script src="bundle.js"></script>
```

2. After including widgets, we need to register them to browser using `customElements.define` api. eg. a progress bar can be registered as

```javascript
customElements.define('my-progress-bar', SummonWidgets.ProgressBar);
```

3. Once you register a widget, it's available as an `HTMLElement`.

```HTML
<!-- Out custome progress bar. -->
<my-progress-bar></my-progress-bar>
```

> Note: Widgets will only be accessible by the name used for registration.

## API

TODO: Provide details about widgets and their apis.

## Developement Guide

TODO: Write instruction.
