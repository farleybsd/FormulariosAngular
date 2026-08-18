import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SimpleStepperComponent } from '../simple-stepper.component';
import { ErrorMessagesComponent } from '../../../../../shared/error-messages/components/error-messages/error-messages.component';
import { NextStepDirective } from '../directives/next-step.directive';
import { PreviousStepDirective } from '../directives/previous-step.directive';

@Component({
  selector: 'app-address-data-step',
  imports: [ErrorMessagesComponent, ReactiveFormsModule, NextStepDirective, PreviousStepDirective],
  templateUrl: './address-data-step.component.html',
  styleUrl: './address-data-step.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressDataStepComponent {
  private controlContainer = inject(ControlContainer);
  private simpleStepperComponent = inject(SimpleStepperComponent);

  protected form!: FormGroup;

  ngOnInit(): void {
    this.form = this.controlContainer.control?.get('address') as FormGroup;
  }
}
