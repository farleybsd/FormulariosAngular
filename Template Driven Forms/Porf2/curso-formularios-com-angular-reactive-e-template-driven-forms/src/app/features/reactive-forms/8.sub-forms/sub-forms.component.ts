import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { accountVisibilityValidator } from './validators/account-visibility.validator';
import { AccountType } from './enums/account-type.enum';
import { AccountVisibility } from './enums/account-visibility.enum';

@Component({
  selector: 'app-sub-forms',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './sub-forms.component.html',
  styleUrl: './sub-forms.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubFormsComponent {
  protected form = new FormGroup({
    accountType: new FormControl<AccountType>(AccountType.FREE),
    privacySettings: new FormGroup({
      visibility: new FormControl<AccountVisibility>(AccountVisibility.PUBLIC),
    }),
  }, {
    validators: [
      accountVisibilityValidator({
        accountType: 'accountType',
        visibility: ['privacySettings', 'visibility']
      })
    ]
  });

  protected accountTypes = signal(Object.values(AccountType));
  protected accountVisibilities = signal(Object.values(AccountVisibility));
}
