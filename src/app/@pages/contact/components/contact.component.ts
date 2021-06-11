import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: any;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.minLength(9), Validators.maxLength(12)]],
      comments: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(244),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  submitForm() {}
}
