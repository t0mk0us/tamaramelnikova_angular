import { Component } from '@angular/core';

@Component({
  selector: 'app-bkgimage1',
  templateUrl: './bkgimage1.component.html',
  styleUrl: './bkgimage1.component.css'
})
export class Bkgimage1Component {

  private id: number;
  private url: string;

  constructor() {

      this.id = 1;
      this.url = 'file:///C:/Users/React_apps/tomkous-portfolio/src/images/bkgrounds/CompMind1.jpg';
  }

}
