import { Component, HostListener, ElementRef } from '@angular/core';
import { LanguageService } from '../../services/language-service/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  showMenu = false;

  constructor(
    private eRef: ElementRef,
    public languageService: LanguageService
  ) {}

  changeLanguage(language: string) {
    this.languageService.selectedLanguage = language;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.showMenu = false;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target) && this.showMenu) {
      this.closeMenu();
    }
  }
}
