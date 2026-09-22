import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TagsComponent } from './tags/tags.component';
import { AbstractControl, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-control-value-acessor',
  imports: [TagsComponent,ReactiveFormsModule,JsonPipe,FormsModule],
  templateUrl: './control-value-acessor.component.html',
  styleUrl: './control-value-acessor.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlValueAcessorComponent {

  protected tags = new FormControl<string[]>([], {
    // value: ['Farley','Souza','Rufino'],
    // disabled: true,
  });
  protected tagsWithNgModel= signal([]);

  protected toggle() {
    return this.tags.enabled ? this.tags.disable() : this.tags.enable();
  }

  protected setValues(control:AbstractControl){
    control.setValue(['Acao','Aventura','Terror']);
  }
  protected markAsTouched(control:AbstractControl){
    control.markAsTouched();
  }
}
