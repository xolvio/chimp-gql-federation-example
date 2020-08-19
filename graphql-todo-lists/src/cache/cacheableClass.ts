import { withCache } from "./withCache";

type CacheSettings = {
  name: string;
  ttl?: number;
};

export function cacheableClass(...methodsToWrap: (CacheSettings | string)[]) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super();
        methodsToWrap.forEach((m) => {
          const ttl = typeof m === "string" ? undefined : m.ttl;
          const methodName = typeof m === "string" ? m : m.name;
          if (!super[methodName])
            throw new Error(
              `Method ${methodName} does not exist on the ${this.constructor.name} class`
            );

          this[methodName] = (...queryArgs) =>
            withCache(
              `${constructor.name}-${methodName}-${JSON.stringify(queryArgs)}`,
              () => super[methodName].apply(this, queryArgs),
              ttl
            );
        });
      }
    };
  };
}
