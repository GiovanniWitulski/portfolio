import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language-service/language.service';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent implements OnInit, OnDestroy {
  languageChangeSubscription: Subscription;

  constructor(public languageService: LanguageService) {
    this.languageChangeSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.updatePlaceholders(language);
        this.updateErrorMessages(language);
      });
  }

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  namePlaceholder: string = '';
  emailPlaceholder: string = '';
  messagePlaceholder: string = '';
  nameErrorText: string = '';
  emailErrorText: string = '';
  messageErrorText: string = '';

  ngOnInit(): void {
    this.updatePlaceholders(this.languageService.selectedLanguage);
    this.updateErrorMessages(this.languageService.selectedLanguage);
  }

  ngOnDestroy(): void {
    this.languageChangeSubscription.unsubscribe();
  }

  updatePlaceholders(language: string): void {
    if (language === 'de') {
      this.namePlaceholder = 'Ihr Name kommt hierhin';
      this.emailPlaceholder = 'deineemail@email.com';
      this.messagePlaceholder = 'Hallo Giovanni, ich bin interessiert an...';
    } else {
      this.namePlaceholder = 'Your name goes here';
      this.emailPlaceholder = 'youremail@email.com';
      this.messagePlaceholder = 'Hello Giovanni, I am interested in...';
    }
  }

  updateErrorMessages(language: string): void {
    if (language === 'de') {
      this.nameErrorText = 'Hoppla! Dein Name fehlt.';
      this.emailErrorText = 'Hoppla! Deine E-Mail ist erforderlich.';
      this.messageErrorText = 'Was möchtest du entwickeln lassen?';
    } else {
      this.nameErrorText = 'Oops! It seems your name is missing.';
      this.emailErrorText = 'Hoppla! Your email is required.';
      this.messageErrorText = 'What do you need to develop?';
    }
  }

  mailTest: boolean = true;
  privacyPolicyChecked: boolean = false;

  post = {
    endPoint: 'https://giovanni-witulski.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (
      ngForm.submitted &&
      ngForm.form.valid &&
      this.privacyPolicyChecked &&
      !this.mailTest
    ) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('hat geklappt');
      ngForm.resetForm();
    } else {
      console.log('nope');
    }
  }

  ngAfterViewInit() {
    let formContainers = document.querySelectorAll(
      'form > div:not(.checkbox-container, .submit-btn-container)'
    );

    formContainers.forEach((container) => {
      container.addEventListener('click', () => {
        let inputElement = container.querySelector(
          'input, textarea'
        ) as HTMLElement;

        if (inputElement) {
          inputElement.focus();
        }
      });
    });
  }
}
