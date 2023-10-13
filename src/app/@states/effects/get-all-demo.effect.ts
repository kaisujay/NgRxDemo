import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DemoHttpServiceTsService } from '../../services/demo.http.service.ts.service';
import { DemoActionTypes, LoadDemoAction, LoadDemoSuccessAction, LoadDemoFailedAction } from '../actions/demo.action';
import { Observable, catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class GetAllDemoEffect {
    public constructor(
      private actions$: Actions,
      private demoHttpServiceTsService: DemoHttpServiceTsService
    ) {}
  
    public loadDemoEffect$ = createEffect(() =>
      this.actions$.pipe(
        ofType(DemoActionTypes.LoadDemo),
        switchMap(() =>
          this.getAll()
        )
      )
    );
  
    public loadDemoSuccessEffect$ = createEffect(() =>
      this.actions$.pipe(
        ofType(DemoActionTypes.LoadDemoSuccess),
        switchMap(() =>
          this.getAll()
        )
      )
    );
  
    public getAll(): Observable<any> {
      return this.demoHttpServiceTsService.getDemoModelAll().pipe(
        map(() => new LoadDemoSuccessAction()),
        catchError(err => of(new LoadDemoFailedAction(err)))
      );
    }
  }