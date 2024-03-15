import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  http = inject(HttpClient);
  patientsURL: string = 'assets/data/patients.json';

  constructor() {}

  getData() {
    return this.http.get<any[]>(this.patientsURL);
  }
}
