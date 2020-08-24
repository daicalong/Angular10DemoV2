import { Component, OnInit } from '@angular/core';
import { AppRoutes } from './constants/routes.constant';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Demo';  
  navItems = AppRoutes;

  constructor() { }

  ngOnInit(): void {
  }
}