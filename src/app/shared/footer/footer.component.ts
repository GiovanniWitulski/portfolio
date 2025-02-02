import { Component } from '@angular/core';
import { LanguageService } from '../../services/language-service/language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(public languageService: LanguageService) {}

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
