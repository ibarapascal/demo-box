import { ErrorMessage } from '../model/Common';
import { LocalStorage } from '../model/LocalStorage';

export interface Store {
  localStorage: LocalStorage;
  errorMessage: ErrorMessage;
}
