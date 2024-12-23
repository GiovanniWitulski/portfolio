import { Component, Input } from '@angular/core';
import { Project } from './../../../interfaces/project';
import { PortfolioComponent } from './../portfolio.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioComponent
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project!: Project; 
}
