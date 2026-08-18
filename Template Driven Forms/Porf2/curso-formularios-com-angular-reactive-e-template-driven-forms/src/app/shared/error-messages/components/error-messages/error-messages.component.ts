import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { ERROR_MESSAGES } from '../../tokens/error-messages.token';
import { ErrorMessageResolverService } from '../../services/error-message-resolver.service';

@Component({
  selector: 'app-error-messages',
  imports: [],
  templateUrl: './error-messages.component.html',
  styleUrl: './error-messages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessagesComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private errorMessageResolverService = inject(ErrorMessageResolverService);

  control = input.required<AbstractControl>();

  protected currentErrorMessage = signal<string | null>(null);

  protected showPendingMessage = signal(false);

  protected pendingMessage = signal(this.errorMessageResolverService.pendingMessage);

  ngOnInit(): void {
    this.control()
      .events.pipe(
        takeUntilDestroyed(this.destroyRef),
        debounceTime(50),
        filter(() => this.control().touched || this.control().dirty),
      )
      .subscribe(() => {
        this.showPendingMessage.set(this.control().pending);

        if (this.control().errors === null) {
          this.currentErrorMessage.set(null);
          return;
        }

        const message = this.errorMessageResolverService.getMessage(this.control().errors!);
        this.currentErrorMessage.set(message);
      });
  }
}
