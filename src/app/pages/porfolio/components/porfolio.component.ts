import { Component, OnInit } from '@angular/core';
import { Projects } from '../models/Projects';
import { seed } from '../../../shared/seed/projects.seed';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss'],
})
export class PorfolioComponent implements OnInit {
  projects: Projects[] = seed;
  websites: Projects[] = [];
  games: Projects[] = [];
  apps: Projects[] = [];
  backends: Projects[] = [];

  constructor() {}

  ngOnInit(): void {
    this.projects = this.projects.reverse();

    this.websites = this.projects.filter(
      (project) => project.type === 'website'
    );

    this.games = this.projects.filter(
      (project) => project.type === 'videogame'
    );

    this.apps = this.projects.filter((project) => project.type === 'app');

    this.backends = this.projects.filter(
      (project) => project.type === 'backend'
    );
  }
}
