import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessagesComponent } from '../../../shared/error-messages/components/error-messages/error-messages.component';

function createStorage(key: string) {
  return {
    get: () => JSON.parse(localStorage.getItem(key) || '{}'),
    set: (value: any) => localStorage.setItem(key, JSON.stringify(value)),
  };
}

interface IFormContract {
  name: FormControl<string | null>;
  email: FormControl<string>;
}
@Component({
  selector: 'app-form-group',
  imports: [ReactiveFormsModule, JsonPipe, ErrorMessagesComponent,AsyncPipe],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupComponent implements OnInit {
  draftStorage = createStorage('formGroupDraft');

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log('valueChanges', value);
      this.draftStorage.set(value);
    });
    //this.setFormData();
    this.setPatchFormValue();
  }

  protected form = new FormGroup<IFormContract>(
    {
      name: new FormControl('', {
        validators: [Validators.required],
        // updateOn: 'blur', // permite que a validação do campo seja disparada apenas quando o campo perde o foco, evitando validações desnecessárias a cada digitação
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
    },
    {
      //updateOn: 'blur', // permite que a validação do formGroup seja disparada apenas quando o campo perde o foco, evitando validações desnecessárias a cada digitação
    },
  );

  protected setFormData() {
    this.form.setValue({
      name: 'John Doe',
      email: 'john.doe@example.com',
    }); // precisa de todos os campos declarados no formGroup, caso contrário, será lançado um erro
  }

  protected setPatchFormValue() {
    const draft = this.draftStorage.get();
    if (draft) {
      this.form.patchValue(draft, {
        emitEvent: false, // evita que o valueChanges seja disparado ao atualizar o formGroup
      });
    }
  }

  protected updateFormData() {
    this.form.patchValue({
      email: 'john.doe@example.com',
    }); // permite atualizar apenas alguns campos do formGroup
  }

  protected submit(event: Event): void {
    console.log('event', event);
    console.log('form', this.form.value);
  }

  protected clearField(): void {
    (this.form.controls.name.setValue(''),
      {
        onlySelf: true, // garante que apenas o campo específico seja atualizado, sem afetar outros campos do formGroup
      });
  }
  toggle() {
    if(this.form.controls.email.disabled) {
      this.form.controls.email.enable({onlySelf: true,emitEvent: false});
    } else {
      this.form.controls.email.disable({onlySelf: true,emitEvent: false});
    }
  }
}
