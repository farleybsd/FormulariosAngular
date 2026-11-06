import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';

interface FormModel {
  name: string;
  email: string;
  value: number;
}

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, FormField, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App {
  protected formModel = signal({
    name: '',
    email: '',
  });
  protected form = form(this.formModel);

  constructor() {
    this.form.email().value();
  }

  protected setValue() {
    this.formModel.set({
      name: 'John Doe',
      email: 'john.doe@example.com'
    })

    // this.form().value.set({
    //   email: 'john.doe@example.com',
    //   name: 'John Doe',
    // })
    // this.form.email().value.set('john.doe@example.com');
  //this.form.email().value.update((current) => current + 'teste@teste.com')
  }

  protected reset() {
// forma 1 mais nao atualiuza o dirty e o touched dor  form
  //  this.formModel.set({
  //     name: '',
  //     email: ''
  //   })

  // Forma 2 mais atualiza o dirty e o touched do form
    this.form().reset({
      email: '',
      name: ''
    });
   }
}
