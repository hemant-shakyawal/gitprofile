import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GitprofileService {
  API_URL = 'https://api.github.com/users';
  constructor(private httpClient: HttpClient) {}
  getuser(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/mojombo`);
  }
}
