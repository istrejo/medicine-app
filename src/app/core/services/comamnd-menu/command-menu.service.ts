import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommandMenuService {
  private visible = new BehaviorSubject<boolean>(false);
  visible$ = this.visible.asObservable();

  constructor() {}

  showCommandMenu(show: boolean) {
    this.visible.next(show);
  }
}
