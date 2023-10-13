import { Component, OnInit } from '@angular/core';
import { DemoHttpServiceTsService } from './services/demo.http.service.ts.service';

import { select, Store } from '@ngrx/store';
import { DemoState, getDemoState } from '../app/@states/reducers/demo.reducer';
import { LoadDemoAction, LoadDemoSuccessAction, LoadDemoFailedAction,DemoActionUnion } from '../app/@states/actions/demo.action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NgRxDemo';


  constructor(demoService: DemoHttpServiceTsService, private store$: Store) {
    demoService.getDemoModelAll().subscribe((data) => {
      console.warn("data", data);
    });

    demoService.getDemoModelById(4).subscribe((data) => {
      console.warn(data);
    });
  }
  ngOnInit(): void {
    console.warn(this.store$.dispatch(new LoadDemoAction()));
  }
}
