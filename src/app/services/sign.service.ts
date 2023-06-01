import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class SignService {
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  TOKEN_SESSION_ATTRIBUTE = 'token'

  private url: string = 'https://tsi3-back-end.herokuapp.com/sign';

  public username: any;
  public password: any;

  constructor(private http: HttpClient) {}

  async authenticationService(username: any, password: any) {
    await axios.get(this.url, {
      headers: {
        Authorization: this.createBasicAuthToken(username, password)
      }
    });
    this.username = username;
    this.password = password;
    this.registerSuccessfulLogin(username, password);
  }

  createBasicAuthToken(username: any, password: any) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username: any, password: any) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    sessionStorage.setItem(this.TOKEN_SESSION_ATTRIBUTE, this.createBasicAuthToken(username, password))
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(this.TOKEN_SESSION_ATTRIBUTE);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}
