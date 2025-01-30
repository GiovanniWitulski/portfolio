import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SlidingTextsService {
  constructor() {}

  texts: string[] = [
    'Available for remote work',
    '•',
    'Frontend Developer',
    '•',
    'Based in Landsberg am Lech',
    '•',
    'Open to Work',
    '•',
    'Available for remote work',
    '•',
    'Frontend Developer',
    '•',
    'Based in Landsberg am Lech',
    '•',
    'Open to Work',
    '•',
  ];

  textsDe: string[] = [
    'Verfügbar für Remote Arbeit',
    '•',
    'Frontend Developer',
    '•',
    'Ansässig in Landsberg am Lech',
    '•',
    'Auf Jobsuche',
    '•',
    'Verfügbar für Remote Arbeit',
    '•',
    'Frontend Entwickler',
    '•',
    'Ansässig in Landsberg am Lech',
    '•',
    'Auf Jobsuche',
    '•',
  ];
}
