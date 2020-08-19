/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as url from "url";
import portableFetch from "portable-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "http://localhost:8091".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
  csv: ",",
  ssv: " ",
  tsv: "\t",
  pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
  (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
  url: string;
  options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
  protected configuration: Configuration;

  constructor(
    configuration?: Configuration,
    protected basePath: string = BASE_PATH,
    protected fetch: FetchAPI = portableFetch
  ) {
    if (configuration) {
      this.configuration = configuration;
      this.basePath = configuration.basePath || this.basePath;
    }
  }
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
  name: "RequiredError";
  constructor(public field: string, msg?: string) {
    super(msg);
  }
}

/**
 *
 * @export
 * @interface ItemResource
 */
export interface ItemResource {
  /**
   *
   * @type {string}
   * @memberof ItemResource
   */
  text?: string;
  /**
   *
   * @type {string}
   * @memberof ItemResource
   */
  listId?: string;
}
/**
 *
 * @export
 * @interface RenameResource
 */
export interface RenameResource {
  /**
   *
   * @type {string}
   * @memberof RenameResource
   */
  text?: string;
  /**
   *
   * @type {string}
   * @memberof RenameResource
   */
  id?: string;
}
/**
 *
 * @export
 * @interface ToDoItem
 */
export interface ToDoItem {
  /**
   *
   * @type {string}
   * @memberof ToDoItem
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof ToDoItem
   */
  text: string;
  /**
   *
   * @type {string}
   * @memberof ToDoItem
   */
  listId: string;
  /**
   *
   * @type {boolean}
   * @memberof ToDoItem
   */
  checked: boolean;
  /**
   *
   * @type {Date}
   * @memberof ToDoItem
   */
  createdAt?: Date;
}
/**
 * TodoItemControllerApi - fetch parameter creator
 * @export
 */
export const TodoItemControllerApiFetchParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(body: string, options: any = {}): FetchArgs {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          "body",
          "Required parameter body was null or undefined when calling _delete."
        );
      }
      const localVarPath = `/api/item`;
      const localVarUrlObj = url.parse(localVarPath, true);
      const localVarRequestOptions = Object.assign(
        { method: "DELETE" },
        options
      );
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query
      );
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      localVarRequestOptions.headers = Object.assign(
        {},
        localVarHeaderParameter,
        options.headers
      );
      const needsSerialization =
        <any>"string" !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.body = needsSerialization
        ? JSON.stringify(body || {})
        : body || "";

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {ItemResource} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createItem(body: ItemResource, options: any = {}): FetchArgs {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          "body",
          "Required parameter body was null or undefined when calling createItem."
        );
      }
      const localVarPath = `/api/items`;
      const localVarUrlObj = url.parse(localVarPath, true);
      const localVarRequestOptions = Object.assign({ method: "POST" }, options);
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query
      );
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      localVarRequestOptions.headers = Object.assign(
        {},
        localVarHeaderParameter,
        options.headers
      );
      const needsSerialization =
        <any>"ItemResource" !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.body = needsSerialization
        ? JSON.stringify(body || {})
        : body || "";

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getItems(options: any = {}): FetchArgs {
      const localVarPath = `/api/items`;
      const localVarUrlObj = url.parse(localVarPath, true);
      const localVarRequestOptions = Object.assign({ method: "GET" }, options);
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query
      );
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      localVarRequestOptions.headers = Object.assign(
        {},
        localVarHeaderParameter,
        options.headers
      );

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {string} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    markChecked(body: string, options: any = {}): FetchArgs {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          "body",
          "Required parameter body was null or undefined when calling markChecked."
        );
      }
      const localVarPath = `/api/item/check`;
      const localVarUrlObj = url.parse(localVarPath, true);
      const localVarRequestOptions = Object.assign({ method: "POST" }, options);
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query
      );
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      localVarRequestOptions.headers = Object.assign(
        {},
        localVarHeaderParameter,
        options.headers
      );
      const needsSerialization =
        <any>"string" !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.body = needsSerialization
        ? JSON.stringify(body || {})
        : body || "";

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {string} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    markUnchecked(body: string, options: any = {}): FetchArgs {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          "body",
          "Required parameter body was null or undefined when calling markUnchecked."
        );
      }
      const localVarPath = `/api/item/uncheck`;
      const localVarUrlObj = url.parse(localVarPath, true);
      const localVarRequestOptions = Object.assign({ method: "POST" }, options);
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query
      );
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      localVarRequestOptions.headers = Object.assign(
        {},
        localVarHeaderParameter,
        options.headers
      );
      const needsSerialization =
        <any>"string" !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.body = needsSerialization
        ? JSON.stringify(body || {})
        : body || "";

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {RenameResource} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rename(body: RenameResource, options: any = {}): FetchArgs {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          "body",
          "Required parameter body was null or undefined when calling rename."
        );
      }
      const localVarPath = `/api/item/rename`;
      const localVarUrlObj = url.parse(localVarPath, true);
      const localVarRequestOptions = Object.assign({ method: "POST" }, options);
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query
      );
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      localVarRequestOptions.headers = Object.assign(
        {},
        localVarHeaderParameter,
        options.headers
      );
      const needsSerialization =
        <any>"RenameResource" !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.body = needsSerialization
        ? JSON.stringify(body || {})
        : body || "";

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * TodoItemControllerApi - functional programming interface
 * @export
 */
export const TodoItemControllerApiFp = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(
      body: string,
      options?: any
    ): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
      const localVarFetchArgs = TodoItemControllerApiFetchParamCreator(
        configuration
      )._delete(body, options);
      return (
        fetch: FetchAPI = portableFetch,
        basePath: string = BASE_PATH
      ) => {
        return fetch(
          basePath + localVarFetchArgs.url,
          localVarFetchArgs.options
        ).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response;
          } else {
            throw response;
          }
        });
      };
    },
    /**
     *
     * @param {ItemResource} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createItem(
      body: ItemResource,
      options?: any
    ): (fetch?: FetchAPI, basePath?: string) => Promise<ToDoItem> {
      const localVarFetchArgs = TodoItemControllerApiFetchParamCreator(
        configuration
      ).createItem(body, options);
      return (
        fetch: FetchAPI = portableFetch,
        basePath: string = BASE_PATH
      ) => {
        return fetch(
          basePath + localVarFetchArgs.url,
          localVarFetchArgs.options
        ).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        });
      };
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getItems(
      options?: any
    ): (fetch?: FetchAPI, basePath?: string) => Promise<Array<ToDoItem>> {
      const localVarFetchArgs = TodoItemControllerApiFetchParamCreator(
        configuration
      ).getItems(options);
      return (
        fetch: FetchAPI = portableFetch,
        basePath: string = BASE_PATH
      ) => {
        return fetch(
          basePath + localVarFetchArgs.url,
          localVarFetchArgs.options
        ).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        });
      };
    },
    /**
     *
     * @param {string} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    markChecked(
      body: string,
      options?: any
    ): (fetch?: FetchAPI, basePath?: string) => Promise<ToDoItem> {
      const localVarFetchArgs = TodoItemControllerApiFetchParamCreator(
        configuration
      ).markChecked(body, options);
      return (
        fetch: FetchAPI = portableFetch,
        basePath: string = BASE_PATH
      ) => {
        return fetch(
          basePath + localVarFetchArgs.url,
          localVarFetchArgs.options
        ).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        });
      };
    },
    /**
     *
     * @param {string} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    markUnchecked(
      body: string,
      options?: any
    ): (fetch?: FetchAPI, basePath?: string) => Promise<ToDoItem> {
      const localVarFetchArgs = TodoItemControllerApiFetchParamCreator(
        configuration
      ).markUnchecked(body, options);
      return (
        fetch: FetchAPI = portableFetch,
        basePath: string = BASE_PATH
      ) => {
        return fetch(
          basePath + localVarFetchArgs.url,
          localVarFetchArgs.options
        ).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        });
      };
    },
    /**
     *
     * @param {RenameResource} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rename(
      body: RenameResource,
      options?: any
    ): (fetch?: FetchAPI, basePath?: string) => Promise<ToDoItem> {
      const localVarFetchArgs = TodoItemControllerApiFetchParamCreator(
        configuration
      ).rename(body, options);
      return (
        fetch: FetchAPI = portableFetch,
        basePath: string = BASE_PATH
      ) => {
        return fetch(
          basePath + localVarFetchArgs.url,
          localVarFetchArgs.options
        ).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        });
      };
    },
  };
};

/**
 * TodoItemControllerApi - factory interface
 * @export
 */
export const TodoItemControllerApiFactory = function (
  configuration?: Configuration,
  fetch?: FetchAPI,
  basePath?: string
) {
  return {
    /**
     *
     * @param {string} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(body: string, options?: any) {
      return TodoItemControllerApiFp(configuration)._delete(body, options)(
        fetch,
        basePath
      );
    },
    /**
     *
     * @param {ItemResource} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createItem(body: ItemResource, options?: any) {
      return TodoItemControllerApiFp(configuration).createItem(body, options)(
        fetch,
        basePath
      );
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getItems(options?: any) {
      return TodoItemControllerApiFp(configuration).getItems(options)(
        fetch,
        basePath
      );
    },
    /**
     *
     * @param {string} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    markChecked(body: string, options?: any) {
      return TodoItemControllerApiFp(configuration).markChecked(body, options)(
        fetch,
        basePath
      );
    },
    /**
     *
     * @param {string} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    markUnchecked(body: string, options?: any) {
      return TodoItemControllerApiFp(configuration).markUnchecked(
        body,
        options
      )(fetch, basePath);
    },
    /**
     *
     * @param {RenameResource} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rename(body: RenameResource, options?: any) {
      return TodoItemControllerApiFp(configuration).rename(body, options)(
        fetch,
        basePath
      );
    },
  };
};

/**
 * TodoItemControllerApi - object-oriented interface
 * @export
 * @class TodoItemControllerApi
 * @extends {BaseAPI}
 */
export class TodoItemControllerApi extends BaseAPI {
  /**
   *
   * @param {string} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TodoItemControllerApi
   */
  public _delete(body: string, options?: any) {
    return TodoItemControllerApiFp(this.configuration)._delete(body, options)(
      this.fetch,
      this.basePath
    );
  }

  /**
   *
   * @param {ItemResource} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TodoItemControllerApi
   */
  public createItem(body: ItemResource, options?: any) {
    return TodoItemControllerApiFp(this.configuration).createItem(
      body,
      options
    )(this.fetch, this.basePath);
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TodoItemControllerApi
   */
  public getItems(options?: any) {
    return TodoItemControllerApiFp(this.configuration).getItems(options)(
      this.fetch,
      this.basePath
    );
  }

  /**
   *
   * @param {string} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TodoItemControllerApi
   */
  public markChecked(body: string, options?: any) {
    return TodoItemControllerApiFp(this.configuration).markChecked(
      body,
      options
    )(this.fetch, this.basePath);
  }

  /**
   *
   * @param {string} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TodoItemControllerApi
   */
  public markUnchecked(body: string, options?: any) {
    return TodoItemControllerApiFp(this.configuration).markUnchecked(
      body,
      options
    )(this.fetch, this.basePath);
  }

  /**
   *
   * @param {RenameResource} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TodoItemControllerApi
   */
  public rename(body: RenameResource, options?: any) {
    return TodoItemControllerApiFp(this.configuration).rename(body, options)(
      this.fetch,
      this.basePath
    );
  }
}
