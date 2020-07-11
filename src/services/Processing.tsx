import {
  ErrorResponseContent,
  HttpResponseContent
} from '../interface/model/Common';
import { InputAction } from '../interface/model/InputAction';

export const catchDispatch = (
  params: any,
  service: any,
  serviceAction: any,
) => {
  const action = {
    catchErrorMessage: (payload: InputAction) => ({
      type: 'catchErrorMessage',
      payload,
    }),
  };
  return async (dispatch: any) => {
    try {
      dispatch(serviceAction(await service(params)));
    } catch (error) {
      dispatch(action.catchErrorMessage(JSON.parse(error.message)));
    }
  };
};

export const generateErrorResponse = (
  response: HttpResponseContent,
  result: ErrorResponseContent,
): string => {
  const usedAttributes = [
    'ok',
    'redirected',
    'status',
    'statusText',
    'type',
    'url',
  ];
  const filtered = usedAttributes.reduce((obj, x) => {
    (obj as any)[x] = response[x];
    return obj;
  }, {});
  return JSON.stringify({ ...filtered, ...result });
};
