import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

interface FormModel {
  nickname: string | null;
  age: number | string | null;
  date:Date | string;
  time:Date | string;
  datetime:number | string;
  theme: Theme ;
  receiveNews: boolean;
  frequency: Frequency;
}
enum Frequency {
  Daily = 'daily',
  Weekly = 'weekly',
}
enum Theme {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}

const themeLabelMapper: Record<Theme, string> = {
  [Theme.Light]: 'Claro',
  [Theme.Dark]: 'Escuro',
  [Theme.System]: 'Sistema',
};

const frequencyLabelMapper: Record<Frequency, string> = {
  [Frequency.Daily]: 'Diário',
  [Frequency.Weekly]: 'Semanal',
};

function createThemeOptions(){
  return Object.values(Theme).map((theme) => ({
    value: theme,
    label: themeLabelMapper[theme],
  }));
}

function createFrequencyOptions(){
  return Object.values(Frequency).map((frequency) => ({
    value: frequency,
    label: frequencyLabelMapper[frequency],
  }));
}

@Component({
  selector: 'app-native-fields',
  imports: [FormField,JsonPipe],
  templateUrl: './native-fields.component.html',
  styleUrl: './native-fields.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NativeFields {


  protected themeOptions = signal(createThemeOptions());
  protected frequencyOptions = signal(createFrequencyOptions());

  protected formModel = signal<FormModel>({
    nickname: '',
    age: null,
    date: new Date(),
    time: new Date(),
    datetime:    Date.now(),
    theme: '' as Theme,
    receiveNews: false,
    frequency: '' as Frequency,
  })

  protected form = form(this.formModel)
  datetimeIso = computed(() => new Date(this.formModel().datetime).toISOString())
}
