import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { LastMessage } from '../last-message';
import { environment } from '../../environments/environment';

import { MESSAGES } from '../last-message';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messagesUrl = '/api/messages';
  private isProd = false;

  constructor(private http: HttpClient) {
    this.isProd = environment.production;
  }

  getMessages(): Observable<LastMessage[]|null> {
    if (!this.isProd) {
      return of(MESSAGES);
    }
    return this.http.get<LastMessage[]>(this.messagesUrl)
      .pipe(
        catchError(this.handleError('getMessages', []))
      );
  }

  addMessage (message: LastMessage) {
    if (!this.isProd) {
      return of(message);
    }
    return this.http.post<LastMessage>(this.messagesUrl, message, httpOptions).pipe(
      catchError(this.handleError<LastMessage>('addMessage'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
