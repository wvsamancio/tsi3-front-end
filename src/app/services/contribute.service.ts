import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contribute } from '../interfaces/contribute';

@Injectable({
  providedIn: 'root'
})
export class ContributeService {
  private url: string = 'https://tsi3-back-end.herokuapp.com/contributions'

  constructor(private http: HttpClient) {}

  public getContributions(): Observable<Contribute> {
    return this.http.get<Contribute>(this.url).pipe(
      response => response,
      error => error
    );
  }

  public getContribute(id: string): Observable<Contribute> {
    return this.http.get<Contribute>(`${this.url}/${id}`).pipe(
      response => response,
      error => error
    );
  }

  public saveContribute(contribute: Contribute): Observable<Contribute> {
    return this.http.post<Contribute>(this.url, contribute).pipe(
      response => response,
      error => error
    );
  }
}
