import { Component } from '@angular/core';
import { DemoHttpServiceTsService } from './services/demo.http.service.ts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgRxDemo';

  constructor(demoService: DemoHttpServiceTsService) {
    demoService.getDemoModelAll().subscribe((data) => {
      console.warn("data", data);
    });

    demoService.getDemoModelById(4).subscribe((data) => {
      console.warn(data);
    });
  }
}
