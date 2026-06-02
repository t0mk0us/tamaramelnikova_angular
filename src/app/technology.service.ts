import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Technology } from './technology';
import { TECHNOLOGIES } from './mock-technologies';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class ContentService {

  constructor(private messageService: MessageService) { }

  getTechnologiess(): Observable<Technology[]> {
    const technologies = of(TECHNOLOGIES);
    this.messageService.add('TechnologyService: fetched content');
    return contents;
  }

  getTechnology(id: number): Observable<Technology> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const technology = TECHNOLOGIES.find(c => c.id === id)!;
    this.messageService.add(`TechnologyService: fetched content id=${id}`);
    return of(content);
  }
}
