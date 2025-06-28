import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-navbar',
/*   standalone: true,
  imports: [], */
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {
  contents: Content[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getContents();
  }

  getContents(): void {
    this.contentService.getContents()
      .subscribe(contents => this.contents = contents.slice(0, 6));
  }
}