export interface Alert {
  id?: string;
  type?: AlertType;
  message?: string;
  autoClose?: boolean;
  keepAfterRouteChange?: boolean;
  fade?: boolean;

  // constructor () {
    
  // }
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}

export class AlertOptions {
  id?: string;
  autoClose?: boolean;
  keepAfterRouteChange?: boolean;
}