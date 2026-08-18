import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { map, Observable, of, switchMap, timer } from 'rxjs';

interface iName {
  id: number;
  name: string;
}

export function checkSimilarNameValidator() {
  const httpClient = inject(HttpClient);

  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const value = control.value;

    if (!value) {
      return of(null);
    }

    return timer(500).pipe(
      switchMap(() => {
        return httpClient
          .get<iName[]>('http://localhost:3000/names', {
            params: {
              'name:contains': value,
            },
          })
          .pipe(
            map((response) => {
              return response.length > 0 ? { similarName: true } : null;
            }),
          );
      }),
    );
  };
}
