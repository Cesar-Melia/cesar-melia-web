import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: any;
  submited: boolean = false;

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
      telefono: [Number, [Validators.maxLength(12)]],
      comentarios: [
        '',
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(244),
      ],
    });
  }

  ngOnInit(): void {}

  submitForm() {}
}
