import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contribute } from '../interfaces/contribute';

import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class ContributeService {
  private url: string = 'https://tsi3-back-end.herokuapp.com/contributions'

  constructor(private http: HttpClient) {}

  async getContributions(token: any){
    const response = await axios.get(this.url, {
      headers: {
        Authorization: token
      }
    })
    return response.data;
  }

  async getUserContributions(username: any, token: any) {
    const response =  await axios.get(`${this.url}/${username}`, {
      headers: {
        Authorization: token
      }
    })
    return response.data;
  }

  async getUserContribute(username: any, id: string, token: any) {
    const response = await axios.get(`${this.url}/${username}/${id}`, {
      headers: {
        Authorization: token
      }
    })
    return response.data;
  }

  async saveContribute(contribute: Contribute, token: any) {
    const response = await axios.post(this.url, contribute, {
      headers: {
        Authorization: token
      }
    })
    return response.data;
  }
}
