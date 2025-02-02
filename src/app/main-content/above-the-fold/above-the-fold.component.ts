import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { AboveTheFoldMobileComponent } from './above-the-fold-mobile/above-the-fold-mobile.component';
import { SlidingTextsService } from '../../services/sliding-texts/sliding-texts.service';
import { LanguageService } from '../../services/language-service/language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, AboveTheFoldMobileComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  texts: string[] = [];
  textsDe: string[] = [];

  constructor(
    private slidingTextsService: SlidingTextsService,
    public languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.texts = this.slidingTextsService.texts;
    this.textsDe = this.slidingTextsService.textsDe;
  }
}
