import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { HeroList } from './hero-list.constant';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  heroList = Array<Hero>();
  selectedHero = {} as Hero;

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroList(): void {
    this.heroList = this.heroService.getHeroList();
  }

  ngOnInit(): void {
    this.getHeroList();
  }
}
