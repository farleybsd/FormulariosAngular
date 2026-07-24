import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { map, Observable, of, switchMap, timer } from 'rxjs';

interface Iname {
  id: number;
  name: string;
}

export function checkSimilarNameValidator() {
  const htppClient = inject(HttpClient);

  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const value = control.value;
    if (!value) return of(null);

    return timer(500).pipe(
      switchMap(() => {
        return htppClient
          .get<Iname[]>(`http://localhost:3000/names`, {
            params: {
              'name:contains': value,
            },
          })
          .pipe(
            map((respose: Iname[]) => {
              return respose.length === 0 ? null : { similarName: true };
            }),
          );
      }),
    );
  };
}
