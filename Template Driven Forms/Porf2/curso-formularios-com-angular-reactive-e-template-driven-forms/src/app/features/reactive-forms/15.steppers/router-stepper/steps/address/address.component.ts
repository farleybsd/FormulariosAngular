import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormStateService } from '../../stores/form-state.service';
import { ErrorMessagesComponent } from '../../../../../../shared/error-messages/components/error-messages/error-messages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-address',
  imports: [ErrorMessagesComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressComponent {
  private formStateService = inject(FormStateService);

  protected form = this.formStateService.addressForm;
}
