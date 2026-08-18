import { inject, Injectable } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Injectable()
export class FormStateService {
  private fb = inject(NonNullableFormBuilder);

  private form = this.fb.group({
    personal: this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    }),
    address: this.fb.group({
      zipcode: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      street: ['', [Validators.required]],
      number: ['', [Validators.required]],
      complement: '',
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
    }),
    payment: this.fb.group({
      creditCard: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      expiry: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
    }),
  });

  get personalForm() {
    return this.form.controls.personal;
  }

  get addressForm() {
    return this.form.controls.address;
  }

  get paymentForm() {
    return this.form.controls.payment;
  }
}
