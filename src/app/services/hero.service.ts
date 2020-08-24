import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Hero } from '../interfaces/hero.interface';
import { HeroList } from '../constants/hero-list.constant';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor(private messageService: MessageService) { }
  
  getHeroListAsync(): Observable<Hero[]> {
    this.messageService.add(`HeroService: fetched heroes`);
    return of(HeroList);
  }
}
