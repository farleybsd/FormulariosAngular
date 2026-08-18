import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagesComponent } from '../../../../../shared/error-messages/components/error-messages/error-messages.component';
import { SimpleStepperComponent } from '../simple-stepper.component';
import { NextStepDirective } from '../directives/next-step.directive';

@Component({
  selector: 'app-personal-data-step',
  imports: [ReactiveFormsModule, ErrorMessagesComponent, NextStepDirective],
  templateUrl: './personal-data-step.component.html',
  styleUrl: './personal-data-step.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalDataStepComponent implements OnInit {
  private controlContainer = inject(ControlContainer);
  private simpleStepperComponent = inject(SimpleStepperComponent);

  protected form!: FormGroup;

  ngOnInit(): void {
    this.form = this.controlContainer.control?.get('personal') as FormGroup;
  }

}
