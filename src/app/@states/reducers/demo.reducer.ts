import {
    DemoActionTypes,
    DemoActionUnion
  } from '../actions/demo.action';
  
  import { createFeatureSelector } from '@ngrx/store';
  import { DemoModel } from '../../models/demo.model';

  export interface DemoState {
    demo: DemoModel[];
    isLoading: boolean;
    isError: boolean;
  }

  export const initialState: DemoState = {
    demo: [],
    isLoading: false,
    isError: false
  };

  export function DemoReducer(state: DemoState = initialState, action: DemoActionUnion): DemoState {
    switch (action.type) {
      case DemoActionTypes.LoadDemo:
        return {
          ...state,
          demo: {
            ...state.demo
          },
          isLoading: true,
          isError: false
        };
  
      case DemoActionTypes.LoadDemoSuccess:
        return {
          ...state,
          demo: {
            ...state.demo
          },
          isLoading: false,
          isError: false
        };
  
      case DemoActionTypes.LoadDemoFailed:
        return {
          ...state,
          isLoading: false,
          isError: true
        };
  
      default:
        return state;
    }
  }
  
  export const getDemoState =
    createFeatureSelector<DemoState>('demo');
  