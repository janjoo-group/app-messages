import { p as promiseResolve, b as bootstrapLazy } from './index-CZDkFMwQ.js';
export { s as setNonce } from './index-CZDkFMwQ.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.30.0 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["jgroup-app-message_2",[[1,"jgroup-app-messages",{"appKey":[1,"app-key"],"appSectionKey":[1,"app-section-key"],"userIdentifier":[1,"user-identifier"],"messages":[32]}],[1,"jgroup-app-message",{"heading":[1],"message":[1],"type":[1]}]]]], options);
});
//# sourceMappingURL=jgroup-app-messages.js.map

//# sourceMappingURL=jgroup-app-messages.js.map