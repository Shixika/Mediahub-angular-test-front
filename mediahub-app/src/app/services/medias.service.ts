import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Media } from './media';

@Injectable({
  providedIn: 'root'
})
export class MediasService {

  constructor(
    private http: HttpClient
  ) { }

  private mediasUrl = 'api/medias';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** GET medias from the server */
  getMedias(): Observable<Media[]> {
    return this.http.get<Media[]>(this.mediasUrl)
      .pipe(
        catchError(this.handleError<Media[]>('getMedias', []))
      );
  }

  /** GET media by id. Will 404 if id not found */
  getMedia(tconst: number): Observable<Media> {
    const url = `${this.mediasUrl}/${tconst}`;
    return this.http.get<Media>(url).pipe(
      catchError(this.handleError<Media>(`getMedia id=${tconst}`))
    );
  }

  updateMedia(media: Media): Observable<Media> {
    return this.http.put(this.mediasUrl, media, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateMedia'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(operation, 'failed: ', error.message);
      return of(result as T);
    };
  }
}
