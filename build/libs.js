System.registerDynamic("npm:domready@1.0.8/ready", [], true, function(req, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  !function(name, definition) {
    if (typeof module != 'undefined')
      module.exports = definition();
    else if (typeof define == 'function' && typeof define.amd == 'object')
      define(definition);
    else
      this[name] = definition();
  }('domready', function() {
    var fns = [],
        listener,
        doc = document,
        hack = doc.documentElement.doScroll,
        domContentLoaded = 'DOMContentLoaded',
        loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);
    if (!loaded)
      doc.addEventListener(domContentLoaded, listener = function() {
        doc.removeEventListener(domContentLoaded, listener);
        loaded = 1;
        while (listener = fns.shift())
          listener();
      });
    return function(fn) {
      loaded ? setTimeout(fn, 0) : fns.push(fn);
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:domready@1.0.8", ["npm:domready@1.0.8/ready"], true, function(req, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = req('npm:domready@1.0.8/ready');
  global.define = __define;
  return module.exports;
});

System.register('js/libs.js', ['npm:domready@1.0.8'], function (_export) {

  // import _ from 'lodash';
  // etc…
  'use strict';

  var domready;
  return {
    setters: [function (_npmDomready108) {
      domready = _npmDomready108['default'];
    }],
    execute: function () {}
  };
});
