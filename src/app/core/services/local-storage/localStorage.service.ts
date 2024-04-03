import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage = new BehaviorSubject<Storage | null>(localStorage);

  constructor() {
    this.storage.next(localStorage);
  }

  // Establece un valor en el localStorage
  setItem(key: string, value: any): void {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
    this.storage.next(localStorage);
  }

  // Obtiene un valor del localStorage
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  // Elimina un valor del localStorage
  removeItem(key: string): void {
    localStorage.removeItem(key);
    this.storage.next(localStorage);
  }
}
