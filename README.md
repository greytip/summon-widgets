# Summon Widgets

A collection of useful widgets.

## Usage

To use widgets in browser, please follow instruction below:

1. Add the `script` tag in your web as below.

```html
<script src="https://gitcdn.xyz/repo/greytip/summon-widgets/master/build/summon-widgets.js"></script>
```

2. After including widgets, we need to register them to browser using `customElements.define` api. eg. a progress bar can be registered as

```javascript
customElements.define('my-progress-bar', SummonWidgets.ProgressBar);
```

3. Once you register a widget, it's available as an `HTMLElement`.

```HTML
<!-- Our custom progress bar. -->
<my-progress-bar job-id="12345" source="some/source/to/get/status"></my-progress-bar>
```

> Note: Widgets will only be accessible by the name used for registration.

## API

### Widgets

#### ProgressBar

Fetches status and displays it.

- `job-id`: Id of the job whose status needs to displayed.
- `source`: Source which takes the job-id and returns the status. Source should have a placeholder for job. eg. `get/{job-id}/status`. `{job-id}` is a placeholder for the job.

## Development Environment Setup

1. Clone the repository.
2. Navgite to repo and Run `npm install` to get dependecies.
3. Run `npm run server` to start a local server.
4. Hit `http://localhost:4000` in the browser.
5. To create build run `npm run build`.
