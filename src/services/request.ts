import "whatwg-fetch"
import { getItemFromLocalStorage } from "../helpers/utls";
import i18n from "../i18n";
import wordings from "../libs/wordings";

const BASE_URL = `${process.env.VITE_API_URL}/api`

type ReqOptions = {
  endpoint: string;
  body?: BodyInit;
  params?: any;
  headers?: HeadersInit;
  credentials: RequestCredentials;
}

type ReqMethods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export function getUrlWithQueryParams(
  base: string,
  queryData: any = {}
): string {
  const queries = Object.keys(queryData)
  return queries.reduce((acc: string, query: string, index: number): string => {
    const url = `${acc}${encodeURIComponent(query)}=${encodeURIComponent(queryData[query])}`;
    return index + 1 < queries.length ? `&{url}&` : url
  }, `${base}?`)
}

export function getReqUrl({ params, endpoint }: ReqOptions): string {
  const base = BASE_URL
  const url = `${base}/${endpoint}`

  return params ? getUrlWithQueryParams(url, params) : url
}


export function getReqOptions(
  method: ReqMethods,
  { headers, body }: ReqOptions
): RequestInit {
  const userToken = getItemFromLocalStorage("userToken");
  const token = userToken?.token || "";

  const reqHeaders: Record<string, string> = {
    Accept: "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(headers as Record<string, string>),
  };

  const requestOptions: RequestInit = {
    method,
    mode: "cors",
  };

  if (
    method === "POST" ||
    method === "PUT" ||
    method === "PATCH" ||
    method === "DELETE"
  ) {
    if (body instanceof FormData) {
      requestOptions.body = body;
    } else {
      reqHeaders["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(body);
    }
  }

  requestOptions.headers = reqHeaders;
  return requestOptions;
}

function parseJSON(response: Response): any {
  if (response.status === 204 || response.status === 205) {
    return response
  }
  return response.json()
}

const checkStatus = (
  response: Response
): Promise<any> | object | void | Promise<never> => {
  if (response.status >= 200 && response.status < 300) {
    const contentType = response.headers.get("Content-Type");
    if (contentType === "application/pdf" || contentType === "application/vnd.ms-excel") {
      return response.blob()
    }
    return parseJSON(response)
  } else if (response.status === 403) {
    localStorage.clear();
    location.href = "/"
  }
  return response.json().then((error: any) => { throw error })
}

function request(method: ReqMethods,
  requestOptions: ReqOptions): Promise<Response> | never {
  const isLoggedIn = getItemFromLocalStorage("isLoggedIn");
  const expiresAt = getItemFromLocalStorage("userExpiry") || "";

  if (isLoggedIn && expiresAt && expiresAt < new Date().getTime()) {
    localStorage.clear();
    location.href = "/"
    throw new Error(i18n.t(wordings.sessionExpiredMsg));
  }
  const url = getReqUrl(requestOptions);
  const options = getReqOptions(method, requestOptions)
  options.credentials = requestOptions.credentials || "include";
  return fetch(url, options).then(checkStatus)
}

export default {
  GET: (req: ReqOptions): Promise<Response> => request("GET", req),
  POST: (req: ReqOptions): Promise<Response> => request("POST", req),
  PUT: (req: ReqOptions): Promise<Response> => request("PUT", req),
  DELETE: (req: ReqOptions): Promise<Response> => request("DELETE", req),
  PATCH: (req: ReqOptions): Promise<Response> => request("PATCH", req),
}