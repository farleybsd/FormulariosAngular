import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  imports: [ReactiveFormsModule],
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalDataComponent implements OnInit {
  private controlContainer = inject(ControlContainer);

  protected form!: FormGroup;

  ngOnInit(): void {
    this.form = this.controlContainer.control?.get('personal') as FormGroup;
  }
}
