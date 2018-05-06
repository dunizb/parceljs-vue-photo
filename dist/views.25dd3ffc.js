// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped, ModuleConfig) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(ModuleConfig);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({22:[function(require,module,exports) {
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("main{\n  margin-top: 10px;\n}\nmain .wrapper{\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  max-width: 1020px;\n  margin: 0 auto;\n}\nmain .wrapper .box{\n  width: 33%;\n  height: 33%;\n  margin-bottom: 5px;\n  background-color: #fff;\n}\n.box .names{\n  text-align: center;\n  font-size: 14px;\n}\n.box .names .name{\n  font-size: 13px;\n  font-weight: 300;\n}\n.box img{\n  width: 100%;\n  height: 100%;\n}");
var __vue__options__ = typeof module.exports === "function" ? module.exports.options : module.exports;
if (__vue__options__.functional) {
  console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.");
}
__vue__options__.render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm._m(0);
};
__vue__options__.staticRenderFns = [function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('main', [_c('div', { staticClass: "wrapper" }, [_c('div', { staticClass: "box" }, [_c('img', { attrs: { "src": "http://img1.ph.126.net/VXdZ6QJh-uq4GTr9ILExOQ==/6632284925074459408.jpg", "alt": "照片" } }), _vm._v(" "), _c('div', { staticClass: "names" }, [_c('div', { staticClass: "main-name" }, [_vm._v("彩云之南")]), _vm._v(" "), _c('div', { staticClass: "name" }, [_vm._v("大理·丽江·泸沽湖")])])]), _vm._v(" "), _c('div', { staticClass: "box" }, [_c('img', { attrs: { "src": "http://img1.ph.126.net/VXdZ6QJh-uq4GTr9ILExOQ==/6632284925074459408.jpg", "alt": "照片" } }), _vm._v(" "), _c('div', { staticClass: "names" }, [_c('div', { staticClass: "main-name" }, [_vm._v("彩云之南")]), _vm._v(" "), _c('div', { staticClass: "name" }, [_vm._v("大理·丽江·泸沽湖")])])]), _vm._v(" "), _c('div', { staticClass: "box" }, [_c('img', { attrs: { "src": "http://img1.ph.126.net/VXdZ6QJh-uq4GTr9ILExOQ==/6632284925074459408.jpg", "alt": "照片" } }), _vm._v(" "), _c('div', { staticClass: "names" }, [_c('div', { staticClass: "main-name" }, [_vm._v("彩云之南")]), _vm._v(" "), _c('div', { staticClass: "name" }, [_vm._v("大理·丽江·泸沽湖")])])]), _vm._v(" "), _c('div', { staticClass: "box" }, [_c('img', { attrs: { "src": "http://img1.ph.126.net/VXdZ6QJh-uq4GTr9ILExOQ==/6632284925074459408.jpg", "alt": "照片" } }), _vm._v(" "), _c('div', { staticClass: "names" }, [_c('div', { staticClass: "main-name" }, [_vm._v("彩云之南")]), _vm._v(" "), _c('div', { staticClass: "name" }, [_vm._v("大理·丽江·泸沽湖")])])])])]);
}];
if (module.hot) {
  (function () {
    var hotAPI = require("vue-hot-reload-api");
    hotAPI.install(require("vue"), true);
    if (!hotAPI.compatible) return;
    module.hot.accept();
    module.hot.dispose(__vueify_style_dispose__);
    if (!module.hot.data) {
      hotAPI.createRecord("data-v-7f9713cb", __vue__options__);
    } else {
      hotAPI.reload("data-v-7f9713cb", __vue__options__);
    }
  })();
}
},{"vueify/lib/insert-css":16,"vue-hot-reload-api":14,"vue":8}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(config) {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    },
    data: config && config.hot
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://localhost:59719/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id, undefined, {
    hot: true
  });

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,22])