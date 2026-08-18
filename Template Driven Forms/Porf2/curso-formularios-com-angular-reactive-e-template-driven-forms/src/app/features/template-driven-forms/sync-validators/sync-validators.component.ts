import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IncludeWordValidatorDirective } from './validators/include-word-validator.directive';

@Component({
  selector: 'app-sync-validators',
  imports: [FormsModule, JsonPipe, IncludeWordValidatorDirective],
  templateUrl: './sync-validators.component.html',
  styleUrl: './sync-validators.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SyncValidatorsComponent {

  protected message = signal('');

  protected includeWord = signal('carro');

}
