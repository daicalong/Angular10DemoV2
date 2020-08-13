import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Hero } from '../interfaces/hero.interface';
import { HeroList } from '../heroes/hero-list.constant';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroList(): Hero[] {
    return HeroList;
  }

  getHeroListAsync(): Observable<Hero[]> {
    this.messageService.add(`HeroService: fetched heroes`);
    return of(HeroList);
  }
}
