import { ChangeDetectionStrategy, Component, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-name',
  imports: [FormsModule],
  template: `
           <div>
            AppName

            <input
              class="input"
              [(ngModel)]="value"
              placeholder="Enter your name"
              />
            </div>
              `
})

export class NameComponent {

  value = model('');
}

@Component({
  selector: 'app-root',
  imports: [FormsModule,NameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {

  inputValue = signal('');
}
