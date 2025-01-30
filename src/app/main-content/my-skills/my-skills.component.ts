import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../services/language-service/language.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  constructor(public languageService: LanguageService) {}
  icons = [
    { src: 'icon/html.png', name: 'HTML' },
    { src: 'icon/css.png', name: 'CSS' },
    { src: 'icon/javascript.png', name: 'JavaScript' },
    { src: 'icon/material-design.png', name: 'Material Design' },
    { src: 'icon/typescript.png', name: 'TypeScript' },
    { src: 'icon/angular.png', name: 'Angular' },
    { src: 'icon/firebase.png', name: 'Firebase' },
    { src: 'icon/git.png', name: 'GIT' },
    { src: 'icon/rest-api.png', name: 'Rest-Api' },
    { src: 'icon/scrum.png', name: 'Scrum' },
    { src: 'icon/growth-mindset.png', name: 'Growth mindset' },
  ];
}
