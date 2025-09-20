import { b as bootstrapLazy } from './index-d22e9599.js';
export { s as setNonce } from './index-d22e9599.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["app-root",[[1,"app-root",{"journeyViewed":[32]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map