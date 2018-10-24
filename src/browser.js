// Pollyfill for async await.

import 'regenerator-runtime/runtime';

import SummonWidgets from './widgets';

// Registering widget to `window` object so they can be accessed in browser.
(($window) => {
  $window.SummonWidgets = SummonWidgets;
})(window);
