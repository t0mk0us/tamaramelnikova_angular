import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Content } from './content';
import { CONTENTS } from './mock-contents';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class ContentService {

  constructor(private messageService: MessageService) { }

  getContents(): Observable<Content[]> {
    const contents = of(CONTENTS);
    this.messageService.add('ContentService: fetched content');
    return contents;
  }

  getContent(id: number): Observable<Content> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const content = CONTENTS.find(c => c.id === id)!;
    this.messageService.add(`ContentService: fetched content id=${id}`);
    return of(content);
  }
}
