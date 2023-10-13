import { Action } from '@ngrx/store';
import { DemoModel } from 'src/app/models/demo.model';

export enum DemoActionTypes {
    LoadDemo = '[LoadDemo] Load Demo',
    LoadDemoSuccess = '[LoadDemoSuccess] Load Demo Success',
    LoadDemoFailed = '[LoadDemoFailed] Load Demo Failed'
  }

  export class LoadDemoAction implements Action {
    public readonly type = DemoActionTypes.LoadDemo;
    public constructor() {}
  }
  
  export class LoadDemoSuccessAction implements Action {
    public readonly type = DemoActionTypes.LoadDemoSuccess;
    public constructor() {}
  }
  
  export class LoadDemoFailedAction implements Action {
    public readonly type = DemoActionTypes.LoadDemoFailed
    public constructor(public error: string) {}
  }

  export type DemoActionUnion =
  | LoadDemoAction
  | LoadDemoSuccessAction
  | LoadDemoFailedAction;