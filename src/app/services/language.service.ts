import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>('hu');
  language$ = this.languageSubject.asObservable();

  setLanguage(lang: string): void {
    this.languageSubject.next(lang);
  }
}
