import { Component } from '@angular/core';
import { LanguageService } from '../../services/language-service/language.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  constructor(public languageService: LanguageService) {}
}
