import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { JsonFormComponent } from './json-form/json-form.component';
import { JsonFormSchema } from './json-form/interfaces/form.schema.interface';
import { FieldType } from './json-form/enums/field-type.enum';
import { Validators } from '@angular/forms';
import { arePasswordsEqualValidator } from './validators/are-passwords-equal.validator';

@Component({
  selector: 'app-json-form-example',
  imports: [JsonFormComponent],
  templateUrl: './json-form-example.component.html',
  styleUrl: './json-form-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonFormExampleComponent {
  protected schema = signal<JsonFormSchema>({
    submitLabel: 'Salvar',
    validators: [arePasswordsEqualValidator('password', 'passwordConfirmation')],
    fields: [
      {
        label: 'Nome',
        name: 'name',
        intialValue: '',
        required: true,
        type: FieldType.Text,
        placeholder: 'Digite seu nome',
      },
      {
        label: 'Email',
        name: 'email',
        intialValue: '',
        required: true,
        type: FieldType.Email,
        placeholder: 'Digite seu email',
      },
      {
        label: 'Função',
        name: 'role',
        intialValue: '',
        required: true,
        type: FieldType.Select,
        placeholder: 'Selecione sua função',
        options: [
          {
            label: 'Administrador',
            value: 'admin',
          },
          {
            label: 'Usuário',
            value: 'user',
          },
        ],
      },
      {
        label: 'Senha',
        name: 'password',
        intialValue: '',
        required: true,
        type: FieldType.Password,
        placeholder: 'Digite sua senha',
        validators: [Validators.minLength(8)],
      },
      {
        label: 'Confime a senha',
        name: 'passwordConfirmation',
        intialValue: '',
        required: true,
        type: FieldType.Password,
        placeholder: 'Digite a senha novamente',
        validators: [Validators.minLength(8)],
      },
    ],
  });

  submit($event: Record<string, unknown>) {
    console.log($event);
  }
}
