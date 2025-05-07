import { B as BUILD, c as consoleDevInfo, H, w as win, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-Cage21tp.js';
export { s as setNonce } from './index-Cage21tp.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.30.0 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo("Running in development mode.");
  }
  if (BUILD.cloneNodeFix) {
    patchCloneNodeFix(H.prototype);
  }
  const scriptElm = BUILD.scriptDataOpts ? win.document && Array.from(win.document.querySelectorAll("script")).find(
    (s) => new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === NAMESPACE
  ) : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["jgroup-app-message",[[1,"jgroup-app-message",{"heading":[1],"message":[1],"type":[1],"theme":[1]}]]],["jgroup-app-messages",[[1,"jgroup-app-messages",{"appKey":[1,"app-key"],"appSectionKey":[1,"app-section-key"],"userIdentifier":[1,"user-identifier"],"apiUrl":[1,"api-url"],"theme":[1],"messages":[32]}]]]], options);
});
//# sourceMappingURL=jgroup-app-messages.esm.js.map

//# sourceMappingURL=jgroup-app-messages.esm.js.map