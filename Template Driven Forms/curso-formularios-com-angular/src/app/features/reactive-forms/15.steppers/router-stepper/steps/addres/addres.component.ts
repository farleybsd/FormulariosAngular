import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ErrorMessagesComponent } from '../../../../../../shared/error-messages/components/error-messages/error-messages.component';
import { FormStateService } from '../../stores/form-state.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-addres',
  imports: [ErrorMessagesComponent,ReactiveFormsModule,RouterLink],
  templateUrl: './addres.component.html',
  styleUrl: './addres.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddresComponent {
   private formStateService = inject(FormStateService);

  protected form = this.formStateService.addressForm;
}
