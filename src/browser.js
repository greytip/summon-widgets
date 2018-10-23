import SummonWidgets from './widgets';

// Registering widget to `window` object so they can be accessed in browser.
(($window) => {
  $window.SummonWidgets = SummonWidgets;
})(window);
