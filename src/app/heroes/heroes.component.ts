import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  heroList = Array<Hero>();
  selectedHero = {} as Hero;

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroList(): void {
    this.heroService.getHeroListAsync().subscribe(heroes => this.heroList = heroes);
  }

  ngOnInit(): void {
    this.getHeroList();
  }
}
