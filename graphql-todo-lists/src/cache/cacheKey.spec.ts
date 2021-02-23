/* eslint-disable global-require,max-classes-per-file,class-methods-use-this, @typescript-eslint/no-var-requires */
import td from "testdouble";

describe("Create proper cache key", () => {
  let cacheableMethod;
  let withCache;
  let cacheableClass;
  beforeEach(() => {
    td.replace("./withCache", {
      withCache: td.func("withCache"),
    });
    withCache = require("./withCache").withCache;
    cacheableMethod = require("./cacheableMethod").cacheableMethod;
    cacheableClass = require("./cacheableClass").cacheableClass;
  });

  afterEach(td.reset);

  test("using cacheableMethod", async () => {
    class BaseClass {
      @cacheableMethod(1)
      methodToCache(prop: { name: string }) {
        return prop;
      }
    }

    class NewClass extends BaseClass {}
    const instance = new NewClass();

    await instance.methodToCache({ name: "John" });
    td.verify(
      withCache(
        'NewClass-methodToCache-[{"name":"John"}]',
        td.matchers.anything(),
        td.matchers.anything()
      )
    );
  });

  test("using cacheableClass", async () => {
    class BaseClass {
      methodToCache(prop: { name: string }): Record<string, unknown> {
        return prop;
      }
    }

    @cacheableClass({ name: "methodToCache", ttl: 1 })
    class NewClass extends BaseClass {}
    const instance = new NewClass();

    await instance.methodToCache({ name: "John" });
    td.verify(
      withCache(
        'NewClass-methodToCache-[{"name":"John"}]',
        td.matchers.anything(),
        td.matchers.anything()
      )
    );
  });
});
