import cacheManager from "cache-manager";

export const cache = cacheManager.caching({
  store: "memory", // See https://github.com/BryanDonovan/node-cache-manager#readme
  max: 100,
  ttl: 10, // seconds
});
