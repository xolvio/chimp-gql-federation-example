import { cache } from "./cache";

export const withCache = <R>(cacheKey = "", fetcher: () => R, ttl = 10): R => {
  if (cacheKey) {
    return (cache.wrap(
      cacheKey,
      () => {
        console.log("Cache miss, getting from source", cacheKey);
        return fetcher();
      },
      { ttl }
    ) as unknown) as R;
  }

  return fetcher();
};
