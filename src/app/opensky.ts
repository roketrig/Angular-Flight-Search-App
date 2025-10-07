// src/app/flights/opensky.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OpenskyService {
  private baseUrl = 'https://opensky-network.org/api';

  constructor(private http: HttpClient) {}

  getAllStates() {
    return this.http.get(`${this.baseUrl}/states/all`);
  }
}
