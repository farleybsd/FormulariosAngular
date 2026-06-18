import { Directive, forwardRef, inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable, pipe, switchMap, timer } from 'rxjs';
import { UniqueNicknameService } from './unique-nickname.service';

@Directive({
  selector: '[appUniqueNickname]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueNicknameDirective),
      multi: true,
    },
  ],
})
export class UniqueNicknameDirective implements AsyncValidator {

  private uniqueNicknameService = inject(UniqueNicknameService);

  validate(control: AbstractControl,): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return timer(3000).pipe(
      switchMap(() => {
        return this.uniqueNicknameService.checkNickname(control.value).pipe(
          map(({ isTaken }) => {
            if (isTaken) {
              return {
                isNicknameTaken: true,
              };
            } else {
              return null;
            }
          }),
        );
      }),
    );
  }
}
