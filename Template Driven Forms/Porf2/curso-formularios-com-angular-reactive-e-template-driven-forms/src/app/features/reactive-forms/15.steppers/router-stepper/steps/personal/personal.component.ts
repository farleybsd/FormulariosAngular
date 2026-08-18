import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ErrorMessagesComponent } from "../../../../../../shared/error-messages/components/error-messages/error-messages.component";
import { ReactiveFormsModule } from '@angular/forms';
import { FormStateService } from '../../stores/form-state.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-personal',
  imports: [ErrorMessagesComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalComponent {
  private formStateService = inject(FormStateService);

  protected form = this.formStateService.personalForm;

}
