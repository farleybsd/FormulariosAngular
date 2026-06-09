import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessagesComponent } from '../../../shared/error-messages/components/error-messages/error-messages.component';
import { JsonPipe } from '@angular/common';
import { avoidRepeatedEmail } from './validations/avoid-repeated-email.validator';
import { from } from 'rxjs';
import { UserEmailsService } from './services/user-emails.service';
import { UserEmails } from './interfaces/user-emails';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule, ErrorMessagesComponent, JsonPipe],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormArrayComponent {
  private userEmailsService = inject(UserEmailsService);
  private activatedRoute = inject(ActivatedRoute);

  protected form = this.createForm(this.activatedRoute.snapshot.data['userEmails'] as UserEmails);

  protected save() {
    this.userEmailsService.update(this.form.value as UserEmails).subscribe(() => {
      console.log('User emails updated');
    });
  }

  protected addEmail() {
    this.form.controls.emails.push(this.createFormControl());
  }

  protected removeEmail(index: number) {
    this.form.controls.emails.removeAt(index);
  }

  protected moveUp(index: number) {
    const moveToIndex = index - 1;
    const currentIndex = index;

    this.moveItem(currentIndex, moveToIndex);
  }

  protected moveDown(index: number) {
    const moveToIndex = index + 1;
    const currentIndex = index;

    this.moveItem(currentIndex, moveToIndex);
  }

  private createFormControl(initialValue: string = '') {
    return new FormControl(initialValue, {
      validators: [Validators.required, Validators.email, avoidRepeatedEmail],
    });
  }

  private moveItem(fromIndex: number, toIndex: number) {
    const fromIndexControl = this.form.controls.emails.at(fromIndex);
    const toIndexControl = this.form.controls.emails.at(toIndex);

    this.form.controls.emails.removeAt(fromIndex);
    this.form.controls.emails.insert(fromIndex, toIndexControl);

    this.form.controls.emails.removeAt(toIndex);
    this.form.controls.emails.insert(toIndex, fromIndexControl);

    this.form.controls.emails.updateValueAndValidity();
  }

  private createForm(userEmails: UserEmails) {
    let emailControls;

    if (userEmails.emails.length === 0) {
      emailControls = [this.createFormControl()];
    } else {
      emailControls = userEmails.emails.map((email) => this.createFormControl(email));
    }

    return new FormGroup({
      name: new FormControl(userEmails.name, {
        validators: [Validators.required],
      }),
      emails: new FormArray(emailControls, {
        validators: [Validators.required],
      }),
    });
  }
}
