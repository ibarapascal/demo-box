import { HttpResponseContent } from './interface/model/Common';
import { generateErrorResponse } from './services/Processing';

// export async function getSomething(params: TypeOfRequestParams) {
//   return request('get', `path${query(params)}`);
// }

type RequestMethod = 'get' | 'post' | 'put' | 'delete';

const query = (params: any) => {
  Object.keys(params).forEach(key => {
    if (params[key].constructor === Array) {
      delete Object.assign(params, { [key + '[]']: params[key] })[key];
    }
  });
  const paramsResult = new URLSearchParams(params).toString();
  return paramsResult.length === 0 ? '' : '?' + paramsResult;
};

const request = async (method: RequestMethod, subUrl: string, body?: any) => {
  const HOST = process.env.REACT_APP_API_URL;
  const url = `${HOST}${subUrl}`;
  let oops: boolean | HttpResponseContent = false;
  const result = await fetch(url, {
    method: method,
    headers: {
      'content-type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
  }).then(res => {
    if (!res.ok) {
      oops = res;
    }
    return res.json();
  });
  if (oops) {
    throw new Error(generateErrorResponse(oops, result));
  }
  return result;
};
