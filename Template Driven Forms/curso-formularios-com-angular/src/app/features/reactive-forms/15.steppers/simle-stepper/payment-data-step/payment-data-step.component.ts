import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SimleStepperComponent } from '../simle-stepper.component';
import { ErrorMessagesComponent } from '../../../../../shared/error-messages/components/error-messages/error-messages.component';
import { PreviousStepDirective } from '../directives/previous-step.directive';
import { NextStepDirective } from '../directives/next-step.directive';

@Component({
  selector: 'app-payment-data-step',
  imports: [ReactiveFormsModule, ErrorMessagesComponent,NextStepDirective, PreviousStepDirective],
  templateUrl: './payment-data-step.component.html',
  styleUrl: './payment-data-step.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentDataStepComponent {
  private controlContainer = inject(ControlContainer);
  private simpleStepperComponent = inject(SimleStepperComponent);
  protected form!: FormGroup;

  ngOnInit(): void {
    this.form = this.controlContainer.control?.get('payment') as FormGroup;
  }
}

