import { Component, HostListener, OnInit, inject } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { CommandMenuService } from './core/services/comamnd-menu/command-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private commandMenuSvc = inject(CommandMenuService);
  show: boolean = false;

  primengConfig = inject(PrimeNGConfig);
  title = 'medicine-app';

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      this.show = !this.show;
      this.commandMenuSvc.showCommandMenu(this.show);
    }
  }
}
