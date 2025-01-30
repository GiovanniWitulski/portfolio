import { Component } from '@angular/core';
import { ContactformComponent } from '../../shared/contactform/contactform.component';
import { LanguageService } from '../../services/language-service/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactformComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(public languageService: LanguageService) {}
}
