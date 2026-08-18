import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { UserPreferencesService } from './services/user-preferences.service';
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

  preferencesKeys = signal<string[]>([]);
  isSaving = signal(false);

  ngOnInit() {
    this.getPreferences().subscribe((preferences) => {
      this.preferencesKeys.set(Object.keys(preferences));

      for (const preferenceKey in preferences) {
        const preferenceValue = preferences[preferenceKey];

        this.form.addControl(
          preferenceKey,
          new FormControl(preferenceValue, {
            nonNullable: true,
          }),
        );
      }
    });
  }

  protected savePreferences() {
    this.isSaving.set(true);

    this.userPreferencesService.updatePreferences(this.form.getRawValue()).subscribe(() => {
      this.isSaving.set(false);
    });
  }

  private getPreferences() {
    return this.userPreferencesService.getPreferences();
  }
}
