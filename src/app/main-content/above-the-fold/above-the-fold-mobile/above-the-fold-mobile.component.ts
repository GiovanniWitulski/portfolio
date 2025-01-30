import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlidingTextsService } from '../../../services/sliding-texts/sliding-texts.service';
import { LanguageService } from '../../../services/language-service/language.service';

@Component({
  selector: 'app-above-the-fold-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './above-the-fold-mobile.component.html',
  styleUrl: './above-the-fold-mobile.component.scss',
})
export class AboveTheFoldMobileComponent {
  texts: string[] = [];

  constructor(
    private slidingTextsService: SlidingTextsService,
    public languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.texts = this.slidingTextsService.texts;
  }
}
