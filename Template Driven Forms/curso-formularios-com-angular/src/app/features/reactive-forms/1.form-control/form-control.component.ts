import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { fullNameValidator } from './validators/full-name-validator';

@Component({
  selector: 'app-form-control',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlComponent {

  protected namecontrol = new FormControl('',{
    nonNullable:true,
    validators:[Validators.required,Validators.minLength(3),fullNameValidator],
  });

  protected reset(){
    this.namecontrol.reset();
  }

}
