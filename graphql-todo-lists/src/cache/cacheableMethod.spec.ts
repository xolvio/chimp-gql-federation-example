/* eslint-disable max-classes-per-file,class-methods-use-this */
import td from "testdouble";
import { cacheableMethod } from "./cacheableMethod";

describe("cacheableMethod", () => {
  test("should return a hit when an unexpired key exists on cacheableMethod", async () => {
    const text = "hello world";
    const fetchMock = td.func("fetchMock");
    td.when(fetchMock(td.matchers.anything())).thenResolve(
      new Promise((res) => res(text))
    );

    class BaseClass {
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,class-methods-use-this
      @cacheableMethod(1)
      cacheMe() {
        return fetchMock(text);
      }
    }

    class NewClass extends BaseClass {}

    const instance = new NewClass();

    const r1 = await instance.cacheMe();
    const r2 = await instance.cacheMe();

    expect(r1).toEqual(text);
    expect(r2).toEqual(text);
    td.verify(fetchMock(text), { times: 1 });
  });
});
