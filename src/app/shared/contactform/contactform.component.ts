// import { HttpClient } from '@angular/common/http';
// import { Component, inject } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-contactform',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './contactform.component.html',
//   styleUrl: './contactform.component.scss',
// })
// export class ContactformComponent {
//   http = inject(HttpClient);

//   contactData = {
//     name: '',
//     email: '',
//     message: '',
//   };

//   mailTest = true;
//   privacyPolicyChecked = false;

//   post = {
//     endPoint: 'https://deineDomain.de/sendMail.php',
//     body: (payload: any) => JSON.stringify(payload),
//     options: {
//       headers: {
//         'Content-Type': 'text/plain',
//         responseType: 'text',
//       },
//     },
//   };

//   onSubmit(ngForm: NgForm) {
//     if (
//       ngForm.submitted &&
//       ngForm.form.valid &&
//       this.privacyPolicyChecked &&
//       !this.mailTest
//     ) {
//       this.http
//         .post(this.post.endPoint, this.post.body(this.contactData))
//         .subscribe({
//           next: (response) => {
//             ngForm.resetForm();
//           },
//           error: (error) => {
//             console.error(error);
//           },
//           complete: () => console.info('send post complete'),
//         });
//     } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
//       console.log('hat geklappt');

//       ngForm.resetForm();
//     } else {
//       console.log('nope');
//     }
//   }

//   ngAfterViewInit() {
//     let formContainers = document.querySelectorAll(
//       'form > div:not(.checkbox-container, .submit-btn-container)'
//     );

//     formContainers.forEach((container) => {
//       container.addEventListener('click', () => {
//         let inputElement = container.querySelector(
//           'input, textarea'
//         ) as HTMLElement;

//         if (inputElement) {
//           inputElement.focus();
//         }
//       });
//     });
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  namePlaceholder = 'Your name goes here';
  emailPlaceholder = 'youremail@email.com';
  messagePlaceholder = 'Hello Giovanni, I am interested in...';

  nameErrorText = 'Oops! it seems your name is missing';
  emailErrorText = 'Hoppla! your email is required';
  messageErrorText = 'What do you need to develop?';

  mailTest = true;
  privacyPolicyChecked = false;

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
