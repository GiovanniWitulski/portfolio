import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private _selectedLanguage = new BehaviorSubject<string>('en');

  selectedLanguage$ = this._selectedLanguage.asObservable();

  get selectedLanguage(): string {
    return this._selectedLanguage.value;
  }

  set selectedLanguage(language: string) {
    this._selectedLanguage.next(language);
  }
}
