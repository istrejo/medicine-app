import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommandMenuService } from '../../../core/services/comamnd-menu/command-menu.service';
import { compileNgModule } from '@angular/compiler';
import { LinksService } from '../../../core/services/links/links.service';
import { Router, RouterLink } from '@angular/router';
import { LocalStorageService } from '../../../core/services/local-storage/localStorage.service';
import { Observable, debounce, debounceTime, finalize, map, tap } from 'rxjs';

@Component({
  selector: 'app-command-menu',
  standalone: true,
  imports: [CommonModule, PrimengModule, RouterLink, FormsModule],
  templateUrl: './command-menu.component.html',
  styleUrl: './command-menu.component.css',
})
export class CommandMenuComponent implements OnInit {
  private commandMenuSvc = inject(CommandMenuService);
  private linksSvc = inject(LinksService);
  private router = inject(Router);
  private localStorageSvc = inject(LocalStorageService);

  userAgent = navigator.userAgent;
  systemKey = '';

  show: any = true;
  search = '';

  items$ = new Observable<any[]>();
  recents: any[] = [];

  ngOnInit(): void {
    this.commandMenuSvc.visible$.subscribe((visible) => (this.show = visible));

    this.recents =
      JSON.parse(this.localStorageSvc.getItem('recents') || '') || [];

    if (this.userAgent.includes('Mac OS')) {
      this.systemKey = '⌘K';
    } else if (this.userAgent.includes('Windows')) {
      this.systemKey = 'ctr+k';
    }
  }

  searchItem(query: string) {
    const search = query.toLocaleLowerCase();
    this.items$ = this.linksSvc.searchItem(query);
  }

  selectItem(item: any) {
    const indexFound = this.recents.findIndex((ele) => ele.path === item.path);

    if (indexFound !== -1) {
      this.recents.splice(indexFound, 1);
    }

    this.recents.unshift(item);

    this.items$ = new Observable();
    this.router.navigate([item.path]);

    this.localStorageSvc.setItem('recents', this.recents.slice(0, 5));
    this.show = false;
    this.search = '';
  }
}
