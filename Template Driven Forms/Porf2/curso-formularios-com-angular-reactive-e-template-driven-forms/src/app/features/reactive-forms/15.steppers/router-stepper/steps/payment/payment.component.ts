import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ErrorMessagesComponent } from '../../../../../../shared/error-messages/components/error-messages/error-messages.component';
import { FormStateService } from '../../stores/form-state.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment',
  imports: [ErrorMessagesComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent {
  private formStateService = inject(FormStateService);

  protected form = this.formStateService.paymentForm;
}
