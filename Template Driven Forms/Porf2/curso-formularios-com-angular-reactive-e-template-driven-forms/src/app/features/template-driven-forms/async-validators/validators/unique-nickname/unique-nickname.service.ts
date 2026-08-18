import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UniqueNicknameService {
  private httpClient = inject(HttpClient);

  checkNickname(nickname: string): Observable<{ isTaken: boolean }> {
    return this.httpClient
      .get<{ id: number; nickname: string }[]>('http://localhost:3000/nicknames', {
        params: {
          nickname,
        },
      })
      .pipe(
        map((data) => data.length > 0),
        map((hasItems) => ({
          isTaken: hasItems,
        })),
      );
  }
}
