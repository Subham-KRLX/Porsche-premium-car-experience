const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { resolve } = require("node:path");
const { test } = require("node:test");
const { runInNewContext } = require("node:vm");
const ts = require("typescript");

// Exercise the component's effect without requiring a DOM or changing its API.
function mount(reduced = false) {
  const instances = [];
  const listeners = new Set();
  let cleanup;
  const media = {
    matches: reduced,
    addEventListener: (_, listener) => listeners.add(listener),
    removeEventListener: (_, listener) => listeners.delete(listener),
  };
  class Lenis {
    constructor(options) {
      this.options = options;
      this.destroyCount = 0;
      instances.push(this);
    }
    destroy() { this.destroyCount++; }
  }
  const source = readFileSync(resolve(__dirname, "../src/components/SmoothScroll.tsx"), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  });
  const exports = {};
  runInNewContext(outputText, {
    exports,
    window: { matchMedia: () => media },
    require: (id) => {
      if (id === "react") return { useEffect: (effect) => { cleanup = effect(); } };
      if (id === "lenis") return { default: Lenis };
      if (id === "react/jsx-runtime") return require("react/jsx-runtime");
      throw new Error(`Unexpected import: ${id}`);
    },
  });
  exports.SmoothScroll({ children: null });
  return {
    instances, listeners,
    cleanup: () => cleanup(),
    change: (matches) => {
      media.matches = matches;
      for (const listener of listeners) listener();
    },
  };
}

test("normal motion uses Lenis's managed animation loop and destroys it on unmount", () => {
  const view = mount();
  assert.equal(view.instances.length, 1);
  assert.equal(view.instances[0].options.autoRaf, true);
  view.cleanup();
  assert.equal(view.instances[0].destroyCount, 1);
  assert.equal(view.listeners.size, 0);
});

test("reduced motion starts with native scrolling and no Lenis instance", () => {
  const view = mount(true);
  assert.equal(view.instances.length, 0);
  view.cleanup();
  assert.equal(view.listeners.size, 0);
});

test("preference changes destroy the old instance and can restore smooth scrolling", () => {
  const view = mount();
  view.change(true);
  assert.equal(view.instances[0].destroyCount, 1);
  view.change(false);
  assert.equal(view.instances.length, 2);
  assert.equal(view.instances[1].destroyCount, 0);
  view.cleanup();
  assert.equal(view.instances[1].destroyCount, 1);
  view.change(false);
  assert.equal(view.instances.length, 2);
});

test("an effect cleanup and remount do not retain the first instance", () => {
  const first = mount();
  first.cleanup();
  const second = mount();
  assert.equal(first.listeners.size, 0);
  assert.equal(first.instances[0].destroyCount, 1);
  assert.equal(second.instances[0].destroyCount, 0);
  second.cleanup();
});
