import { Component } from '@angular/core';

@Component({
  selector: 'app-bkgimage2',
  templateUrl: './bkgimage2.component.html',
  styleUrl: './bkgimage2.component.css'
})
export class Bkgimage2Component {

  private id: number;
  private url: string;

  constructor() {

      this.id = 2;
      this.url = '/assets/images/bkgrounds/CompMind1.jpg';
  }
}
