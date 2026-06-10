import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniqueNicknameDirective } from './validators/unique-nickname/unique-nickname.directive';

@Component({
  selector: 'app-async-validators',
  imports: [FormsModule,UniqueNicknameDirective],
  templateUrl: './async-validators.component.html',
  styleUrl: './async-validators.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncValidatorsComponent {
  protected nickname = signal('');
}
