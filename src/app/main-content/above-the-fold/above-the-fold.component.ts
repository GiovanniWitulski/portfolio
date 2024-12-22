import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  texts: string[] = [
    'Available for remote work',
    '•',
    'Frontend Developer',
    '•',
    'Based in Munich',
    '•',
    'Open to Work',
    '•',
    'Available for remote work',
    '•',
    'Frontend Developer',
    '•',
    'Based in Munich',
    '•',
    'Open to Work',
    '•',
  ];
}
