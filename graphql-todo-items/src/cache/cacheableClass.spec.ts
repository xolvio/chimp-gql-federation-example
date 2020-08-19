/* eslint-disable max-classes-per-file */
import { cacheableClass } from "./cacheableClass";

describe("cacheableClass", () => {
  test("throws error if method does not exist on cacheable Class", () => {
    class BaseClass {
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,class-methods-use-this
      existingMethod() {}
    }

    @cacheableClass("fakeMethod")
    class NewClass extends BaseClass {}

    expect(() => new NewClass()).toThrowError(
      /Method fakeMethod does not exist/
    );
  });

  test("should not throw if method exists on cacheable Class", () => {
    class BaseClass {
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,class-methods-use-this
      existingMethod() {}
    }

    @cacheableClass("existingMethod")
    class NewClass extends BaseClass {}

    expect(() => new NewClass()).not.toThrow();
  });

  test("should return a hit when an unexpired key exists", async () => {
    const text = "hello world";
    const fetchMock = jest.fn((val: string) => new Promise((res) => res(val)));

    class BaseClass {
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,class-methods-use-this
      existingMethod() {
        return fetchMock(text);
      }
    }

    @cacheableClass({ name: "existingMethod", ttl: 1 })
    class NewClass extends BaseClass {}

    const instance = new NewClass();

    const r1 = await instance.existingMethod();
    const r2 = await instance.existingMethod();

    expect(r1).toEqual(text);
    expect(r2).toEqual(text);
    expect(fetchMock).toBeCalledTimes(1); // Cache hit that's why fetchMock called only once
  });

  test("should return a miss when an expired key exists", async () => {
    const text = "hello world";
    const fetchMock = jest.fn((val: string) => new Promise((res) => res(val)));

    class BaseClass {
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,class-methods-use-this
      existingMethod2() {
        return fetchMock(text);
      }
    }

    @cacheableClass({ name: "existingMethod2", ttl: 1 })
    class NewClass extends BaseClass {}

    const instance = new NewClass();

    await instance.existingMethod2();

    expect(fetchMock).toBeCalledTimes(1);

    // Waiting for the cache to expire, fetchMock should be called again then.
    await new Promise((r) => setTimeout(r, 1050));

    await instance.existingMethod2(); // Cache miss fetchMock is being called second time
    expect(fetchMock).toBeCalledTimes(2);
  });

  test("should return a miss when a key does not exist", async () => {
    const text = "hello world";
    const fetchMock = jest.fn((val: string) => new Promise((res) => res(val)));

    class BaseClass {
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,class-methods-use-this
      existingMethod3() {
        return fetchMock(text);
      }
    }

    @cacheableClass({ name: "existingMethod3", ttl: 1 })
    class NewClass extends BaseClass {}

    const instance = new NewClass();

    await instance.existingMethod3();
    expect(fetchMock).toBeCalledTimes(1); // Cache key does not exist, fetchMock called once
  });
});
