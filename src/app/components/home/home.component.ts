import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  language: string = 'hu';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe((lang) => {
      this.language = lang;
    });
  }
}
