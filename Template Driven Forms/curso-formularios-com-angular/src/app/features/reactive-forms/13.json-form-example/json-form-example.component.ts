import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { JsonFormComponent } from './json-form/json-form.component';
import { JsonChema } from './json-form/interfaces/form.schema.interface';
import { FieldType } from './json-form/enums/fiel-type.enum';
import { Validators } from '@angular/forms';
import { arePasswordsEqualValidator } from './validators/are-password-equals.validator';

@Component({
  selector: 'app-json-form-example',
  imports: [JsonFormComponent],
  templateUrl: './json-form-example.component.html',
  styleUrl: './json-form-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonFormExampleComponent {

submit($event: Record<string,unknown>) {
console.log($event);

}

  schema = signal<JsonChema>({
    submiteLabel: 'Salvar',
    validators:[arePasswordsEqualValidator('password','passwordConfirmation')],
    fields: [
      {
        label: 'Nome',
        name: 'name',
        initialValue: '',
        required: true,
        type: FieldType.Text,
        placeholder: 'Digite seu Nome',
      },
      {
        label: 'Email',
        name: 'email',
        initialValue: '',
        required: true,
        type: FieldType.Email,
        placeholder: 'Digite seu Email',
      },
      {
        label: 'Funcao',
        name: 'role',
        initialValue: '',
        required: true,
        type: FieldType.Select,
        placeholder: 'Selecione sua Funcao',
        options: [
          {
            label: 'Administrador',
            value: 'Admin',
          },
          {
            label: 'Usuario',
            value: 'User',
          },
        ],
      },
      {
        label: 'Senha',
        name: 'password',
        initialValue: '',
        required: true,
        type: FieldType.Password,
        placeholder: 'Digite sua Senha',
        validators: [Validators.minLength(8)]
      },
      {
        label: 'Confirme a Senha',
        name: 'passwordConfirmation',
        initialValue: '',
        required: true,
        type: FieldType.Password,
        placeholder: 'Digite a Senha Novamente',
        validators: [Validators.minLength(8)]
      },
    ],
  });
}
