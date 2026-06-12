import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-forms',
  imports: [FormsModule, JsonPipe],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsComponent {


 protected onSubmit(form: NgForm) {

    if (form.valid) {

      console.log('form', form.value);
    }

  }

}
