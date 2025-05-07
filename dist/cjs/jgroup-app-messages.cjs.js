'use strict';

var index = require('./index-qudffozO.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.30.0 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('jgroup-app-messages.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["jgroup-app-message_2.cjs",[[1,"jgroup-app-messages",{"appKey":[1,"app-key"],"appSectionKey":[1,"app-section-key"],"userIdentifier":[1,"user-identifier"],"apiUrl":[1,"api-url"],"theme":[1],"messages":[32]}],[1,"jgroup-app-message",{"heading":[1],"message":[1],"type":[1],"theme":[1]}]]]], options);
});

exports.setNonce = index.setNonce;
//# sourceMappingURL=jgroup-app-messages.cjs.js.map

//# sourceMappingURL=jgroup-app-messages.cjs.js.map