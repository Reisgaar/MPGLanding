import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { countries } from 'src/app/constants/countries';
import { games } from 'src/app/constants/games';

/**
 * Component to show the page of the contact form
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  games = games;
  countries = countries;
  addressForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      game: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{6,20}$/)]],
      message: ['', Validators.required],
      terms: ['', Validators.requiredTrue],
    });
  }

  submitForm(): void {
    console.log('submitted');
    console.log(this.addressForm.value);
  }

  checkForm(): void {
    this.addressForm.get('game').markAsTouched();
    this.addressForm.get('name').markAsTouched();
    this.addressForm.get('email').markAsTouched();
    this.addressForm.get('country').markAsTouched();
    this.addressForm.get('phone').markAsTouched();
    this.addressForm.get('message').markAsTouched();
    this.addressForm.get('terms').markAsTouched();
  }

}
