import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Content } from '../content';
import { ContentService } from '../content.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

export class ContentComponent implements OnInit {
  content: Content | undefined;

    constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getContent();
  }

  getContent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contentService.getContent(id)
      .subscribe(content => this.content = content);
  }

  goBack(): void {
    this.location.back();
  }
}
