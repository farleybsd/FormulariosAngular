import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { UserPreferencesService } from './service/user-preferences.service';
import { FormControl, FormRecord, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { HumanizePropKeyPipe } from './pipes/humanize-prop-key.pipe';

@Component({
  selector: 'app-form-record',
  imports: [ReactiveFormsModule, JsonPipe, HumanizePropKeyPipe],
  templateUrl: './form-record.component.html',
  styleUrl: './form-record.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormRecordComponent implements OnInit {
  private userPreferencesService = inject(UserPreferencesService);

  protected form = new FormRecord<FormControl<boolean>>({});

  preferencesKey = signal<string[]>([]);

  isSaving = signal(false);

  ngOnInit(): void {
    this.getPreferences().subscribe((preferences) => {
      this.preferencesKey.set(Object.keys(preferences));
      for (const preferencekey in preferences) {
        const preferenceValue = preferences[preferencekey];
        this.form.addControl(
          preferencekey,
          new FormControl<boolean>(preferenceValue, {
            nonNullable: true,
          }),
        );
      }
    });
  }

  private getPreferences() {
    return this.userPreferencesService.getPreferences();
  }
  protected savePreferences() {
    this.isSaving.set(true);
    this.userPreferencesService.updatePreferences(this.form.getRawValue()).subscribe(() => {
    this.isSaving.set(false);
    });
  }
}
