'use strict';

var index = require('./index-qudffozO.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["jgroup-app-message_2.cjs",[[1,"jgroup-app-messages",{"appKey":[1,"app-key"],"appSectionKey":[1,"app-section-key"],"userIdentifier":[1,"user-identifier"],"messages":[32]}],[1,"jgroup-app-message",{"heading":[1],"message":[1],"type":[1]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
//# sourceMappingURL=loader.cjs.js.map

//# sourceMappingURL=loader.cjs.js.map