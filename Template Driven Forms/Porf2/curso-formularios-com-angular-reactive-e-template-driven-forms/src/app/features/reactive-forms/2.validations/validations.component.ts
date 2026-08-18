import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { fullNameValidator } from '../1.form-control/validators/full-name.validator';
import { maxNamesValidator } from '../1.form-control/validators/max-names.validator';
import { ErrorMessagesComponent } from '../../../shared/error-messages/components/error-messages/error-messages.component';
import { checkSimilarNameValidator } from '../1.form-control/validators/check-similar-name.validator';

@Component({
  selector: 'app-validations',
  imports: [ReactiveFormsModule, FormsModule, ErrorMessagesComponent],
  templateUrl: './validations.component.html',
  styleUrl: './validations.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidationsComponent {
  private syncValidations = signal([
    { name: 'required', validation: Validators.required },
    { name: 'minLength', validation: Validators.minLength(3) },
    {
      name: 'fullName',
      validation: fullNameValidator,
    },
    {
      name: 'maxNames',
      validation: maxNamesValidator(2),
    },
  ]);

  private asyncValidations = signal([
    { name: 'checkSimilarName', validation: checkSimilarNameValidator() },
  ]);

  protected selectedSyncValidations = signal<string[]>([]);
  protected selectedSyncValidation = signal<string | null>(null);
  protected selectedSyncValidatorExists = signal<boolean>(false);

  protected selectedAsyncValidations = signal<string[]>([]);
  protected selectedAsyncValidation = signal<string | null>(null);
  protected selectedAsyncValidatorExists = signal<boolean>(false);

  private selectedSyncValidationsFn = computed(() => {
    return this.syncValidations()
      .filter((item) => this.selectedSyncValidations().includes(item.name))
      .map((item) => item.validation!);
  });

  protected selectedSyncValidationFn = computed(() => {
    if (!this.selectedSyncValidation()) {
      return null;
    }

    const validationObj = this.syncValidations().find(
      (item) => this.selectedSyncValidation() === item.name,
    );

    return validationObj?.validation;
  });

  private selectedAsyncValidationsFn = computed(() => {
    return this.asyncValidations()
      .filter((item) => this.selectedAsyncValidations().includes(item.name))
      .map((item) => item.validation!);
  });

  protected selectedAsyncValidationFn = computed(() => {
    if (!this.selectedAsyncValidation()) {
      return null;
    }

    const validationObj = this.asyncValidations().find(
      (item) => this.selectedAsyncValidation() === item.name,
    );

    return validationObj?.validation;
  });

  protected syncValidationsKeys = computed(() => this.syncValidations().map((item) => item.name));
  protected asyncValidationsKeys = computed(() => this.asyncValidations().map((item) => item.name));

  protected name = new FormControl('');

  protected addSyncValidators() {
    const fns = this.selectedSyncValidationsFn();
    this.name.addValidators(fns);
    this.selectedSyncValidations.set([]);
  }

  protected setSyncValidators() {
    const fns = this.selectedSyncValidationsFn();
    this.name.setValidators(fns);
    this.selectedSyncValidations.set([]);
  }

  protected removeSyncValidators() {
    const fns = this.selectedSyncValidationsFn();
    this.name.removeValidators(fns);
    this.selectedSyncValidations.set([]);
  }

  protected clearSyncValidators() {
    this.name.clearValidators();
  }

  protected checkValidatorExistence() {
    const fn = this.selectedSyncValidationFn()!;
    this.selectedSyncValidatorExists.set(this.name.hasValidator(fn));
  }

  protected addAsyncValidators() {
    const fns = this.selectedAsyncValidationsFn();
    this.name.addAsyncValidators(fns);
    this.selectedAsyncValidations.set([]);
  }

  protected setAsyncValidators() {
    const fns = this.selectedAsyncValidationsFn();
    this.name.setAsyncValidators(fns);
    this.selectedAsyncValidations.set([]);
  }

  protected removeAsyncValidators() {
    const fns = this.selectedAsyncValidationsFn();
    this.name.removeAsyncValidators(fns);
    this.selectedAsyncValidations.set([]);
  }

  protected clearAsyncValidators() {
    this.name.clearAsyncValidators();
  }

  protected checkAsyncValidatorExistence() {
    const fn = this.selectedAsyncValidationFn()!;
    this.selectedAsyncValidatorExists.set(this.name.hasAsyncValidator(fn));
  }

  protected updateValueAndValidity() {
    this.name.updateValueAndValidity();
  }
}
