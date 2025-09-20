import { p as promiseResolve, b as bootstrapLazy } from './index-f10f8688.js';
export { s as setNonce } from './index-f10f8688.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.22.2 | MIT Licensed | https://stenciljs.com
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
  return bootstrapLazy([["app-root",[[1,"app-root",{"journeyViewed":[32]}]]]], options);
});

//# sourceMappingURL=cdt-cs.js.map