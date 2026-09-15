import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, FormRecord, isFormArray, isFormControl, isFormGroup, isFormRecord } from '@angular/forms';

@Component({
  selector: 'app-utility-functions',
  imports: [JsonPipe],
  templateUrl: './utility-functions.component.html',
  styleUrl: './utility-functions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtilityFunctionsComponent {

  protected currentControl = signal<AbstractControl | null>(null);
  protected  verification = computed(() => {
    return {
      isFormControl: isFormControl(this.currentControl()),
      isFormGroup: isFormGroup(this.currentControl()),
      isFormArray: isFormArray(this.currentControl()),
      isFormRecord: isFormRecord(this.currentControl())
    }
  })

  createFormControl() {
    this.currentControl.set(new FormControl(''));
  }
  createormGroup() {
    this.currentControl.set(new FormGroup({}));
  }
  createFormArray() {
    this.currentControl.set(new FormArray([]));
  }
  createFormRecord() {
    this.currentControl.set(new FormRecord({}));
  }
}
