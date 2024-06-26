/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { Comment } from '../models';
// @ts-ignore
import { CommentRequest } from '../models';
// @ts-ignore
import { CommentVoList } from '../models';
// @ts-ignore
import { CommentWithReplyVoList } from '../models';
// @ts-ignore
import { Reply } from '../models';
// @ts-ignore
import { ReplyRequest } from '../models';
// @ts-ignore
import { ReplyVoList } from '../models';
/**
 * ApiHaloRunV1alpha1CommentApi - axios parameter creator
 * @export
 */
export const ApiHaloRunV1alpha1CommentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a comment.
         * @param {CommentRequest} commentRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createComment1: async (commentRequest: CommentRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'commentRequest' is not null or undefined
            assertParamExists('createComment1', 'commentRequest', commentRequest)
            const localVarPath = `/apis/api.halo.run/v1alpha1/comments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(commentRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a reply.
         * @param {string} name 
         * @param {ReplyRequest} replyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createReply1: async (name: string, replyRequest: ReplyRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('createReply1', 'name', name)
            // verify required parameter 'replyRequest' is not null or undefined
            assertParamExists('createReply1', 'replyRequest', replyRequest)
            const localVarPath = `/apis/api.halo.run/v1alpha1/comments/{name}/reply`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(replyRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a comment.
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getComment: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getComment', 'name', name)
            const localVarPath = `/apis/api.halo.run/v1alpha1/comments/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List comment replies.
         * @param {string} name 
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCommentReplies: async (name: string, page?: number, size?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('listCommentReplies', 'name', name)
            const localVarPath = `/apis/api.halo.run/v1alpha1/comments/{name}/reply`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List comments.
         * @param {string} version The comment subject version.
         * @param {string} kind The comment subject kind.
         * @param {string} name The comment subject name.
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {string} [group] The comment subject group.
         * @param {boolean} [withReplies] Whether to include replies. Default is false.
         * @param {number} [replySize] Reply size of the comment, default is 10, only works when withReplies is true.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listComments1: async (version: string, kind: string, name: string, page?: number, size?: number, sort?: Array<string>, group?: string, withReplies?: boolean, replySize?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'version' is not null or undefined
            assertParamExists('listComments1', 'version', version)
            // verify required parameter 'kind' is not null or undefined
            assertParamExists('listComments1', 'kind', kind)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('listComments1', 'name', name)
            const localVarPath = `/apis/api.halo.run/v1alpha1/comments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }

            if (group !== undefined) {
                localVarQueryParameter['group'] = group;
            }

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
            }

            if (kind !== undefined) {
                localVarQueryParameter['kind'] = kind;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (withReplies !== undefined) {
                localVarQueryParameter['withReplies'] = withReplies;
            }

            if (replySize !== undefined) {
                localVarQueryParameter['replySize'] = replySize;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ApiHaloRunV1alpha1CommentApi - functional programming interface
 * @export
 */
export const ApiHaloRunV1alpha1CommentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ApiHaloRunV1alpha1CommentApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a comment.
         * @param {CommentRequest} commentRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createComment1(commentRequest: CommentRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Comment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createComment1(commentRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiHaloRunV1alpha1CommentApi.createComment1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Create a reply.
         * @param {string} name 
         * @param {ReplyRequest} replyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createReply1(name: string, replyRequest: ReplyRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Reply>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createReply1(name, replyRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiHaloRunV1alpha1CommentApi.createReply1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get a comment.
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getComment(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CommentVoList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getComment(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiHaloRunV1alpha1CommentApi.getComment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List comment replies.
         * @param {string} name 
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCommentReplies(name: string, page?: number, size?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReplyVoList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listCommentReplies(name, page, size, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiHaloRunV1alpha1CommentApi.listCommentReplies']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List comments.
         * @param {string} version The comment subject version.
         * @param {string} kind The comment subject kind.
         * @param {string} name The comment subject name.
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {string} [group] The comment subject group.
         * @param {boolean} [withReplies] Whether to include replies. Default is false.
         * @param {number} [replySize] Reply size of the comment, default is 10, only works when withReplies is true.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listComments1(version: string, kind: string, name: string, page?: number, size?: number, sort?: Array<string>, group?: string, withReplies?: boolean, replySize?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CommentWithReplyVoList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listComments1(version, kind, name, page, size, sort, group, withReplies, replySize, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiHaloRunV1alpha1CommentApi.listComments1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ApiHaloRunV1alpha1CommentApi - factory interface
 * @export
 */
export const ApiHaloRunV1alpha1CommentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ApiHaloRunV1alpha1CommentApiFp(configuration)
    return {
        /**
         * Create a comment.
         * @param {ApiHaloRunV1alpha1CommentApiCreateComment1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createComment1(requestParameters: ApiHaloRunV1alpha1CommentApiCreateComment1Request, options?: RawAxiosRequestConfig): AxiosPromise<Comment> {
            return localVarFp.createComment1(requestParameters.commentRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a reply.
         * @param {ApiHaloRunV1alpha1CommentApiCreateReply1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createReply1(requestParameters: ApiHaloRunV1alpha1CommentApiCreateReply1Request, options?: RawAxiosRequestConfig): AxiosPromise<Reply> {
            return localVarFp.createReply1(requestParameters.name, requestParameters.replyRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a comment.
         * @param {ApiHaloRunV1alpha1CommentApiGetCommentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getComment(requestParameters: ApiHaloRunV1alpha1CommentApiGetCommentRequest, options?: RawAxiosRequestConfig): AxiosPromise<CommentVoList> {
            return localVarFp.getComment(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List comment replies.
         * @param {ApiHaloRunV1alpha1CommentApiListCommentRepliesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCommentReplies(requestParameters: ApiHaloRunV1alpha1CommentApiListCommentRepliesRequest, options?: RawAxiosRequestConfig): AxiosPromise<ReplyVoList> {
            return localVarFp.listCommentReplies(requestParameters.name, requestParameters.page, requestParameters.size, options).then((request) => request(axios, basePath));
        },
        /**
         * List comments.
         * @param {ApiHaloRunV1alpha1CommentApiListComments1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listComments1(requestParameters: ApiHaloRunV1alpha1CommentApiListComments1Request, options?: RawAxiosRequestConfig): AxiosPromise<CommentWithReplyVoList> {
            return localVarFp.listComments1(requestParameters.version, requestParameters.kind, requestParameters.name, requestParameters.page, requestParameters.size, requestParameters.sort, requestParameters.group, requestParameters.withReplies, requestParameters.replySize, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createComment1 operation in ApiHaloRunV1alpha1CommentApi.
 * @export
 * @interface ApiHaloRunV1alpha1CommentApiCreateComment1Request
 */
export interface ApiHaloRunV1alpha1CommentApiCreateComment1Request {
    /**
     * 
     * @type {CommentRequest}
     * @memberof ApiHaloRunV1alpha1CommentApiCreateComment1
     */
    readonly commentRequest: CommentRequest
}

/**
 * Request parameters for createReply1 operation in ApiHaloRunV1alpha1CommentApi.
 * @export
 * @interface ApiHaloRunV1alpha1CommentApiCreateReply1Request
 */
export interface ApiHaloRunV1alpha1CommentApiCreateReply1Request {
    /**
     * 
     * @type {string}
     * @memberof ApiHaloRunV1alpha1CommentApiCreateReply1
     */
    readonly name: string

    /**
     * 
     * @type {ReplyRequest}
     * @memberof ApiHaloRunV1alpha1CommentApiCreateReply1
     */
    readonly replyRequest: ReplyRequest
}

/**
 * Request parameters for getComment operation in ApiHaloRunV1alpha1CommentApi.
 * @export
 * @interface ApiHaloRunV1alpha1CommentApiGetCommentRequest
 */
export interface ApiHaloRunV1alpha1CommentApiGetCommentRequest {
    /**
     * 
     * @type {string}
     * @memberof ApiHaloRunV1alpha1CommentApiGetComment
     */
    readonly name: string
}

/**
 * Request parameters for listCommentReplies operation in ApiHaloRunV1alpha1CommentApi.
 * @export
 * @interface ApiHaloRunV1alpha1CommentApiListCommentRepliesRequest
 */
export interface ApiHaloRunV1alpha1CommentApiListCommentRepliesRequest {
    /**
     * 
     * @type {string}
     * @memberof ApiHaloRunV1alpha1CommentApiListCommentReplies
     */
    readonly name: string

    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof ApiHaloRunV1alpha1CommentApiListCommentReplies
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof ApiHaloRunV1alpha1CommentApiListCommentReplies
     */
    readonly size?: number
}

/**
 * Request parameters for listComments1 operation in ApiHaloRunV1alpha1CommentApi.
 * @export
 * @interface ApiHaloRunV1alpha1CommentApiListComments1Request
 */
export interface ApiHaloRunV1alpha1CommentApiListComments1Request {
    /**
     * The comment subject version.
     * @type {string}
     * @memberof ApiHaloRunV1alpha1CommentApiListComments1
     */
    readonly version: string

    /**
     * The comment subject kind.
     * @type {string}
     * @memberof ApiHaloRunV1alpha1CommentApiListComments1
     */
    readonly kind: string

    /**
     * The comment subject name.
     * @type {string}
     * @memberof ApiHaloRunV1alpha1CommentApiListComments1
     */
    readonly name: string

    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof ApiHaloRunV1alpha1CommentApiListComments1
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof ApiHaloRunV1alpha1CommentApiListComments1
     */
    readonly size?: number

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof ApiHaloRunV1alpha1CommentApiListComments1
     */
    readonly sort?: Array<string>

    /**
     * The comment subject group.
     * @type {string}
     * @memberof ApiHaloRunV1alpha1CommentApiListComments1
     */
    readonly group?: string

    /**
     * Whether to include replies. Default is false.
     * @type {boolean}
     * @memberof ApiHaloRunV1alpha1CommentApiListComments1
     */
    readonly withReplies?: boolean

    /**
     * Reply size of the comment, default is 10, only works when withReplies is true.
     * @type {number}
     * @memberof ApiHaloRunV1alpha1CommentApiListComments1
     */
    readonly replySize?: number
}

/**
 * ApiHaloRunV1alpha1CommentApi - object-oriented interface
 * @export
 * @class ApiHaloRunV1alpha1CommentApi
 * @extends {BaseAPI}
 */
export class ApiHaloRunV1alpha1CommentApi extends BaseAPI {
    /**
     * Create a comment.
     * @param {ApiHaloRunV1alpha1CommentApiCreateComment1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiHaloRunV1alpha1CommentApi
     */
    public createComment1(requestParameters: ApiHaloRunV1alpha1CommentApiCreateComment1Request, options?: RawAxiosRequestConfig) {
        return ApiHaloRunV1alpha1CommentApiFp(this.configuration).createComment1(requestParameters.commentRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a reply.
     * @param {ApiHaloRunV1alpha1CommentApiCreateReply1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiHaloRunV1alpha1CommentApi
     */
    public createReply1(requestParameters: ApiHaloRunV1alpha1CommentApiCreateReply1Request, options?: RawAxiosRequestConfig) {
        return ApiHaloRunV1alpha1CommentApiFp(this.configuration).createReply1(requestParameters.name, requestParameters.replyRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a comment.
     * @param {ApiHaloRunV1alpha1CommentApiGetCommentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiHaloRunV1alpha1CommentApi
     */
    public getComment(requestParameters: ApiHaloRunV1alpha1CommentApiGetCommentRequest, options?: RawAxiosRequestConfig) {
        return ApiHaloRunV1alpha1CommentApiFp(this.configuration).getComment(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List comment replies.
     * @param {ApiHaloRunV1alpha1CommentApiListCommentRepliesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiHaloRunV1alpha1CommentApi
     */
    public listCommentReplies(requestParameters: ApiHaloRunV1alpha1CommentApiListCommentRepliesRequest, options?: RawAxiosRequestConfig) {
        return ApiHaloRunV1alpha1CommentApiFp(this.configuration).listCommentReplies(requestParameters.name, requestParameters.page, requestParameters.size, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List comments.
     * @param {ApiHaloRunV1alpha1CommentApiListComments1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiHaloRunV1alpha1CommentApi
     */
    public listComments1(requestParameters: ApiHaloRunV1alpha1CommentApiListComments1Request, options?: RawAxiosRequestConfig) {
        return ApiHaloRunV1alpha1CommentApiFp(this.configuration).listComments1(requestParameters.version, requestParameters.kind, requestParameters.name, requestParameters.page, requestParameters.size, requestParameters.sort, requestParameters.group, requestParameters.withReplies, requestParameters.replySize, options).then((request) => request(this.axios, this.basePath));
    }
}

