import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from './../../../interfaces/project';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language-service/language.service';

@Component({
  selector: 'app-project-card-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card-mobile.component.html',
  styleUrl: './project-card-mobile.component.scss',
})
export class ProjectCardMobileComponent implements OnInit {
  constructor(public languageService: LanguageService) {}
  @Input() project!: Project;
  @Input() projects: Project[] = [];
  @Input() openedCardIndex: number | null = null;
  @Output() cardClosedMobile = new EventEmitter<void>();
  @Output() cardOpenedMobile = new EventEmitter<void>();
  @Output() nextButtonClickedMobile = new EventEmitter<void>();
  showContainer = false;

  ngOnInit(): void {
    if (this.projects.length === 0) {
      this.projects = [this.project];
    }
  }

  openCardMobile() {
    this.showContainer = true;
    this.cardOpenedMobile.emit();
  }

  closeContainerMobile() {
    this.showContainer = false;
    this.cardClosedMobile.emit();
  }

  nextProjectMobile() {
    this.nextButtonClickedMobile.emit();
  }
}
