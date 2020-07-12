// import * as service from '../api';
import { InputAction } from '../interface/model/InputAction';

// import { catchDispatch } from '../services/Processing';

export const actions = {
  storeLocalStorageInput: (payload: InputAction) => ({
    type: 'storeLocalStorageInput',
    payload,
  }),
};

export const actionWithService = {
  // getSomething: async (params: GetSomethingRequestParams) => {
  //   return catchDispatch(
  //     params,
  //     service.getSomething,
  //     action.receieveSomething,
  //   );
  // },
};
