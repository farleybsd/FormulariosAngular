import { Directive, inject } from '@angular/core';
import { CurrentStepManagerService } from '../services/current-step-manager.service';

@Directive({
  selector: '[appNextStep]',
  host: {
    '(click)': 'nextStep()',
  },
})
export class NextStepDirective {
  private currentStepManagerService = inject(CurrentStepManagerService);

  nextStep() {
    this.currentStepManagerService.nextStep();
  }
}
