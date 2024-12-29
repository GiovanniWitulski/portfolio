import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from './../../../interfaces/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: Project;
  @Input() projects: Project[] = [];
  @Input() openedCardIndex: number | null = null;
  @Output() cardClosed = new EventEmitter<void>();
  @Output() cardOpened = new EventEmitter<void>();
  showContainer = false;

  ngOnInit(): void {
    if (this.projects.length === 0) {
      this.projects = [this.project];
    }
  }

  openCard() {
    this.showContainer = true;
    this.cardOpened.emit();
  }

  closeContainer() {
    this.showContainer = false;
    this.cardClosed.emit();
  }

  nextCard() {
    const currentProjectIndex = this.projects.indexOf(this.project);
    const nextIndex = (currentProjectIndex + 1) % this.projects.length;
    this.project = this.projects[nextIndex];
  }

  previousCard() {
    const currentProjectIndex = this.projects.indexOf(this.project);
    const previousIndex =
      (currentProjectIndex - 1 + this.projects.length) % this.projects.length;
    this.project = this.projects[previousIndex];
  }
}
