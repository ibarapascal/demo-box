export interface ErrorResponseContent {
  error: string;
  code: number;
  message: string;
  details: Array<any>;
}

export interface HttpResponseContent {
  [key: string]: HttpResponseContent[keyof HttpResponseContent];
  body: any;
  bodyUsed: boolean;
  headers: any;
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: string;
  url: string;
}

export interface ErrorMessage
  extends ErrorResponseContent,
    HttpResponseContent {}
