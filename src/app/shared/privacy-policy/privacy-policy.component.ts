import { Component } from '@angular/core';
import { LanguageService } from '../../services/language-service/language.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  constructor(public languageService: LanguageService) {}
}
