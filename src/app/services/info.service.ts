import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../interfaces/info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private url: string = 'http://localhost:8080/infos';

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
