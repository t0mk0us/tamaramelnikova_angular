import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {

  public id: number | undefined;
  public name: string | undefined;
  public link: string | undefined;

    constructor() {

      this.id = 1,
      this.name = "Bank Application",
      this.link = "https://t0mk0us.github.com"
    }
}
