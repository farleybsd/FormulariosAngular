import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { JsonPipe } from '@angular/common';
import { PaymentDataComponent } from './payment-data/payment-data.component';

@Component({
  selector: 'app-control-container',
  imports: [ReactiveFormsModule, PersonalDataComponent, JsonPipe, PaymentDataComponent],
  templateUrl: './control-container.component.html',
  styleUrl: './control-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlContainerComponent {
  private fb = inject(NonNullableFormBuilder);

  protected form = this.fb.group({
    personal: this.fb.group({
      name: '',
      email: '',
      birthdate: '',
    }),
  });

  protected submit() {
    console.log(this.form.value);
  }
}
