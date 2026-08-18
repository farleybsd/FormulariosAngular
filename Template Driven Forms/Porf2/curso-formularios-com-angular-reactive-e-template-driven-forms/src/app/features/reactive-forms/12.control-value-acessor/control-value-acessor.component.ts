import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TagsComponent } from './tags/tags.component';
import { AbstractControl, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-control-value-acessor',
  imports: [TagsComponent, ReactiveFormsModule, JsonPipe, FormsModule],
  templateUrl: './control-value-acessor.component.html',
  styleUrl: './control-value-acessor.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlValueAcessorComponent {
  protected tags = new FormControl<string[]>([]);

  protected tagsWithNgModel = signal([])

  protected setValue(control: AbstractControl) {
    control.setValue(['ação', 'aventura']);
  }

  protected markasTouched(control: AbstractControl) {
    control.markAsTouched();
  }

  protected toggle(control: AbstractControl) {
    return control.enabled ? control.disable() : control.enable();
  }
}
