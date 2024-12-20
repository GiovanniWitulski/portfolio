import { Component } from '@angular/core';
import { ContactformComponent } from '../../shared/contactform/contactform.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ContactformComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
