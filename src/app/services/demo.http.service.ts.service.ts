import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemoModel } from '../models/demo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoHttpServiceTsService {

  constructor(private http: HttpClient) { }

  private url='https://jsonplaceholder.typicode.com/comments';

  public getDemoModelAll(): Observable<DemoModel> {
    return this.http.get<DemoModel>(this.url);
  }

  public getDemoModelById(id: number): Observable<DemoModel> {
    return this.http.get<DemoModel>(this.url+'?id='+id);
  }

  public saveDemoModel(demoModel: DemoModel): Observable<void> {
    return this.http.post<void>(this.url, demoModel);
  }
}
