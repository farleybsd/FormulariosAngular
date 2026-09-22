import { ChangeDetectionStrategy, Component, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-tags',
  imports: [FormsModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagsComponent),
      multi: true,
    },
  ],
})
export class TagsComponent implements ControlValueAccessor {
  private changeFn = (tags: string[]) => {};
  protected onTouchedFn = () => {};
  protected isDisabled = signal(false);

  protected addTag() {
    const tag = this.newTag().trim();
    this.tags.update((tags) => [...tags, tag]);
    this.changeFn(this.tags());
    this.newTag.set('');
  }
  protected removeTag(tag: string) {
    this.tags.update((tags) => tags.filter((t) => t !== tag));
    this.changeFn(this.tags());
  }

  protected tags = signal<string[]>([]);
  protected newTag = signal('');

  writeValue(value: string[]): void {
    if (!Array.isArray(value)) {
      this.tags.set([]);
    } else {
      this.tags.set(value);
    }
  }
  registerOnChange(fn: (tags: string[]) => void): void {
    this.changeFn = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }
}
