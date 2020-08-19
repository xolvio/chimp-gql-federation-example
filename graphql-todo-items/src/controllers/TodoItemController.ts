import { TodoItemControllerApi } from "@generated/external-apis";
import { cacheableClass } from "../cache/cacheableClass";

@cacheableClass({ name: "getItems", ttl: 10 })
export class TodoItemControllerCacheable extends TodoItemControllerApi {}
