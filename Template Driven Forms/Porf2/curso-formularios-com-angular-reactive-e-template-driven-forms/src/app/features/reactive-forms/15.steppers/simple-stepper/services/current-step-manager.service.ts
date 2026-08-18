import { computed, Injectable, signal } from '@angular/core';

@Injectable()
export class CurrentStepManagerService {
  private _currentStep = signal(1);

  currentStep = computed(() => this._currentStep());

  setStep(step: number) {
    this._currentStep.set(step);
  }

  nextStep() {
    this._currentStep.update((step) => step + 1);
  }

  previousStep() {
    this._currentStep.update((step) => step - 1);
  }
}
