import { Component, Input } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from "./../../interfaces/project";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ProjectCardComponent,
    CommonModule,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
    projects: Project[] = [
      {
        title: 'Join',
        technologies: [
          {name: 'Angular', imgSrc: 'icon/angular-small.png'}, 
          {name: 'TypeScript', imgSrc: 'icon/typescript-small.png'}, 
          {name: 'HTML', imgSrc: 'icon/html-small.png'}, 
          {name: 'CSS', imgSrc: 'icon/css-small.png'}, 
          {name: 'Firebase', imgSrc: 'icon/firebase-small.png'}, 
        ],
        imageUrl: 'img/skyrim-map.jpg',
        description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.', 
        liveDemoLink: 'Live Test',
        gitHubLink: 'GitHub',
        inDevelopment: false,
      },
      {
        title: 'El Pollo Loco',
        technologies: [
          {name: 'JavaScript', imgSrc: 'icon/javascript-small.png'}, 
          {name: 'HTML', imgSrc: 'icon/html-small.png'}, 
          {name: 'CSS', imgSrc: 'icon/css-small.png'},
        ],
        imageUrl: 'img/skyrim-map.jpg',
        description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.', 
        liveDemoLink: 'Live Test',
        gitHubLink: 'GitHub',
        inDevelopment: false,
      },
      {
        title: 'DABubble',
        technologies: [
          {name: 'Angular', imgSrc: 'icon/angular-small.png'}, 
          {name: 'TypeScript', imgSrc: 'icon/typescript-small.png'}, 
          {name: 'HTML', imgSrc: 'icon/html-small.png'}, 
          {name: 'CSS', imgSrc: 'icon/css-small.png'}, 
          {name: 'Firebase', imgSrc: 'icon/firebase-small.png'}, 
        ],
        imageUrl: 'img/skyrim-map.jpg',
        description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.', 
        liveDemoLink: 'Live Test',
        gitHubLink: 'GitHub',
        inDevelopment: true,
      },
    ];
}