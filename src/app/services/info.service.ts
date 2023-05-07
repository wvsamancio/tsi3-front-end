import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../interfaces/info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private url: string = 'https://tsi3-back-end.herokuapp.com/infos';

  constructor(private http: HttpClient) {}

  public getInfos(): Observable<Info> {
    return this.http.get<Info>(this.url).pipe(
      response => response,
      error => error
    );
  }

  public getInfo(id: string): Observable<Info> {
    return this.http.get<Info>(`${this.url}/${id}`).pipe(
      response => response,
      error => error
    );
  }
}
