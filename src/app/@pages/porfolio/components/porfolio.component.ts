import { Component, OnInit } from '@angular/core';
import { Projects } from '../models/Projects';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss'],
})
export class PorfolioComponent implements OnInit {
  projects: Projects[] = [
    {
      name: 'Sink the float',
      date: '2021-01-15',
      type: 'videogame',
      technologies: ['Java'],
      isPublic: true,
      url: '',
      repoUrl: 'https://github.com/Cesar-Melia/HundirLaFlota',
      description:
        'Game that consists of sinking ships by shooting with coordinates.',
      imgUrl: '',
    },
    {
      name: 'Apple',
      date: '2021-05-15',
      type: 'website',
      technologies: ['HTML', 'CSS', 'SASS', 'Bootstrap'],
      isPublic: true,
      url: '',
      repoUrl: 'https://gitlab.com/Cesar-Melia/web_apple',
      description: 'Apple frontpage',
      imgUrl: '../assets/images/projects/apple_screen.png',
    },
    {
      name: 'Memory',
      date: '2021-05-10',
      type: 'videogame',
      technologies: ['HTML', 'CSS', 'SASS', 'Javascript'],
      isPublic: true,
      url: '',
      repoUrl: 'https://gitlab.com/Cesar-Melia/memory_game',
      description:
        'Game that consists of discovering pairs of cards with the same drawing.',
      imgUrl: '../assets/images/projects/memory_screen.png',
    },
    {
      name: 'Calculator',
      date: '2021-05-20',
      type: 'app',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
      isPublic: true,
      url: '',
      repoUrl: 'https://gitlab.com/Cesar-Melia/calculator',
      description: 'Reply of Iphone calculator',
      imgUrl: '',
    },
    {
      name: 'Whac a whole',
      date: '2021-05-22',
      type: 'videogame',
      technologies: ['HTML', 'CSS', 'SASS', 'Javascript'],
      isPublic: true,
      url: '',
      repoUrl: 'https://gitlab.com/Cesar-Melia/whac_a_whole_game',
      description: 'Classic game in which you have to hunt the mole.',
      imgUrl: '../assets/images/projects/whac-a-mole_screen.png',
    },
    {
      name: 'Who is who',
      date: '2021-05-24',
      type: 'videogame',
      technologies: ['HTML', 'CSS', 'SASS', 'Javascript'],
      isPublic: true,
      url: '',
      repoUrl: 'https://gitlab.com/Cesar-Melia/who_is_who_game',
      description:
        'Game that consists of guessing which of all the characters is the chosen one by asking different questions.',
      imgUrl: '../assets/images/projects/who-is-who_screen.png',
    },
    {
      name: 'Shopeame',
      date: '2021-05-26',
      type: 'website',
      technologies: ['HTML', 'CSS', 'SASS', 'Bootstrap', 'Javascript'],
      isPublic: true,
      url: '',
      repoUrl: 'https://gitlab.com/Cesar-Melia/shopeame',
      description: 'Web with product gallery and API management panel.',
      imgUrl: '../assets/images/projects/shopeame_screen.png',
    },
    {
      name: 'Quiz game',
      date: '2021-05-30',
      type: 'videogame',
      technologies: ['HTML', 'CSS', 'SASS', 'Bootstrap', 'Javascript'],
      isPublic: true,
      url: '',
      repoUrl: 'https://gitlab.com/Cesar-Melia/quiz-game',
      description:
        'Quiz Game with multiple options to configure the question type.',
      imgUrl: '../assets/images/projects/quiz_quest_screen.png',
    },
    {
      name: 'Rick and Morty',
      date: '2021-06-02',
      type: 'website',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'Bootstrap',
        'Javascript',
        'Angular',
      ],
      isPublic: true,
      url: '',
      repoUrl: 'https://gitlab.com/Cesar-Melia/rick-and-morty-web',
      description:
        'Rick and Morty website with all the info about this cartoons TV program.',
      imgUrl: '../assets/images/projects/rick_chars_screen.png',
    },
    {
      name: 'Game of thrones',
      date: '2021-06-06',
      type: 'website',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'Bootstrap',
        'Javascript',
        'Angular',
      ],
      isPublic: true,
      url: '',
      repoUrl: 'https://gitlab.com/Cesar-Melia/game-of-thrones',
      description:
        'Website about this TV program with all the info about characters, houses, locations...',
      imgUrl: '../assets/images/projects/got_screen.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.projects = this.projects.reverse();
  }
}
