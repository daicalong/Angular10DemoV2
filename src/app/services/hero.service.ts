import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { HeroList } from '../heroes/hero-list.constant';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor() { }

  getHeroList() : Hero[] {
    return HeroList;
  }
}
