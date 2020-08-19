import { withCache } from "./withCache";

export function cacheableMethod(ttl?: number) {
  return function (
    target: Record<string, any>,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value;
    // eslint-disable-next-line no-param-reassign
    descriptor.value = function (...args) {
      return withCache(
        `${this.constructor.name}-${propertyKey}-${JSON.stringify(args)}`,
        () => method.apply(this, args),
        ttl
      );
    };
  };
}
