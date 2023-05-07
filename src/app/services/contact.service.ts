import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url: string = 'http://localhost:8080/contacts'

  constructor(private http: HttpClient) {}

  public getContacts(): Observable<Contact> {
    return this.http.get<Contact>(this.url).pipe(
      response => response,
      error => error
    );
  }
}
