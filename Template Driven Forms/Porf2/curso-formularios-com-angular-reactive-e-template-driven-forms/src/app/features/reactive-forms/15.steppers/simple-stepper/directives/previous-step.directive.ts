import { Directive, inject } from '@angular/core';
import { CurrentStepManagerService } from '../services/current-step-manager.service';

@Directive({
  selector: '[appPreviousStep]',
  host: {
    '(click)': 'previousStep()',
  },
})
export class PreviousStepDirective {
  private currentStepManagerService = inject(CurrentStepManagerService);

  previousStep() {
    this.currentStepManagerService.previousStep();
  }
}
