import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessagesComponent } from '../../../shared/error-messages/components/error-messages/error-messages.component';

function createStorage(key: string) {
  return {
    get: () => JSON.parse(localStorage.getItem(key) ?? 'null'),
    set: (value: any) => localStorage.setItem(key, JSON.stringify(value)),
  };
}

interface iFormContract {
  name: FormControl<string | null>
  email: FormControl<string>
}

@Component({
  selector: 'app-form-group',
  imports: [ReactiveFormsModule, JsonPipe, ErrorMessagesComponent, AsyncPipe],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupComponent implements OnInit {
  draftStorage = createStorage('draft-form');

  protected form = new FormGroup<iFormContract>({
    name: new FormControl('', {
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  });

  toggle() {
    if (this.form.controls.email.disabled) {
      this.form.controls.email.enable({ onlySelf: true, emitEvent: true });
    } else {
      this.form.controls.email.disable({ onlySelf: true, emitEvent: true });
    }
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log('valueChanges', value);
      this.draftStorage.set(value);
    });

    this.setDraftData();
  }

  protected setDraftData() {
    const draftData = this.draftStorage.get();

    if (draftData) {
      this.form.patchValue(draftData, {
        emitEvent: false,
      });
    }
  }

  protected clearField() {
    this.form.controls.name.setValue('', { onlySelf: true });
  }

  protected submit(event: Event) {
    console.log('event', event);

    console.log(this.form.value);
  }
}
