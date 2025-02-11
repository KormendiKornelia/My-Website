import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  language: string = 'hu';

  constructor(private languageService: LanguageService) {}

  scrollToSection(targetId: string): void {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navHeight = document.querySelector('.navbar')?.clientHeight || 0;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  }

  toggleLanguage(): void {
    this.language = this.language === 'hu' ? 'en' : 'hu';
    this.languageService.setLanguage(this.language);
  }
}
