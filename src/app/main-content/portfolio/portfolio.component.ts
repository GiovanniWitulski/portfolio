import { Component, ViewChildren, QueryList } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from './../../interfaces/project';
import { CommonModule } from '@angular/common';
import { ProjectCardMobileComponent } from './project-card-mobile/project-card-mobile.component';
import { LanguageService } from '../../services/language-service/language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, ProjectCardMobileComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  constructor(public languageService: LanguageService) {}

  @ViewChildren(ProjectCardComponent)
  projectCardComponents!: QueryList<ProjectCardComponent>;

  @ViewChildren(ProjectCardMobileComponent)
  projectCardMobileComponents!: QueryList<ProjectCardMobileComponent>;

  projects: Project[] = [
    {
      title: 'Join',
      technologies: [
        { name: 'Angular', imgSrc: 'icon/angular-small.png' },
        { name: 'TypeScript', imgSrc: 'icon/typescript-small.png' },
        { name: 'HTML', imgSrc: 'icon/html-small.png' },
        { name: 'CSS', imgSrc: 'icon/css-small.png' },
        { name: 'Firebase', imgSrc: 'icon/firebase-small.png' },
      ],
      imageUrl: 'img/join.png',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      descriptionDe:
        'Verwalten Sie Ihre Aufgaben effizient mit unserem Kanban-inspirierten Taskmanager. Einfaches Erstellen und Organisieren per Drag-and-Drop, mit Zuweisung von Benutzern und Kategorien.',
      liveDemoLink: 'https://join.giovanni-witulski.com/',
      gitHubLink: 'https://github.com/GiovanniWitulski/Join',
      inDevelopment: false,
    },
    {
      title: 'El Pollo Loco',
      technologies: [
        { name: 'JavaScript', imgSrc: 'icon/javascript-small.png' },
        { name: 'HTML', imgSrc: 'icon/html-small.png' },
        { name: 'CSS', imgSrc: 'icon/css-small.png' },
      ],
      imageUrl: 'img/el-pollo-loco.png',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      descriptionDe:
        'Erlebe ein Jump, Run and Throw-Abenteuer, das auf objektorientierter Programmierung basiert. Unterstütze Pepe dabei, Münzen zu sammeln und Tabasco-Salsa zu finden, um das verrückte Huhn zu besiegen.',
      liveDemoLink: 'https://el-pollo-loco.giovanni-witulski.com/',
      gitHubLink: 'https://github.com/GiovanniWitulski/elPolloLoco',
      inDevelopment: false,
    },
    {
      title: 'DABubble',
      technologies: [
        { name: 'Angular', imgSrc: 'icon/angular-small.png' },
        { name: 'TypeScript', imgSrc: 'icon/typescript-small.png' },
        { name: 'HTML', imgSrc: 'icon/html-small.png' },
        { name: 'CSS', imgSrc: 'icon/css-small.png' },
        { name: 'Firebase', imgSrc: 'icon/firebase-small.png' },
      ],
      imageUrl: 'icon/ban-solid.svg',
      description:
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      descriptionDe:
        'Diese App ist ein Nachbau von Slack. Mit ihrer intuitiven Benutzeroberfläche, Echtzeit-Messaging und durchdachten Kanalstruktur optimiert sie die Kommunikation und Zusammenarbeit in Teams.',
      liveDemoLink: 'Live Test',
      gitHubLink: 'GitHub',
      inDevelopment: true,
    },
  ];

  openedCardIndex: number | null = null;

  openCard(index: number) {
    this.openedCardIndex = index;
    const projectCard = this.projectCardComponents.toArray()[index];
    if (projectCard) {
      projectCard.showContainer = true;
    }
  }

  closeCard() {
    this.openedCardIndex = null;
  }

  nextProject() {
    if (this.openedCardIndex !== null) {
      this.openedCardIndex = (this.openedCardIndex + 1) % this.projects.length;
      this.projectCardComponents.forEach(
        (card) => (card.showContainer = false)
      );
      this.openCard(this.openedCardIndex);
    }
  }

  openCardMobile(index: number) {
    this.openedCardIndex = index;
    const projectCardMobile = this.projectCardMobileComponents.toArray()[index];
    if (projectCardMobile) {
      projectCardMobile.showContainer = true;
    }
  }

  closeCardMobile() {
    this.openedCardIndex = null;
  }

  nextProjectMobile() {
    if (this.openedCardIndex !== null) {
      this.openedCardIndex = (this.openedCardIndex + 1) % this.projects.length;
      this.projectCardMobileComponents.forEach(
        (card) => (card.showContainer = false)
      );
      this.openCardMobile(this.openedCardIndex);
    }
  }
}
