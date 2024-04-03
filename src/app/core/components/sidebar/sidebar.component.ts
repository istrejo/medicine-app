import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { SidebarOption } from '../../interfaces/sidebar.interface';
import { LinksService } from '../../services/links/links.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  options: SidebarOption[] = [];
  linksSvc = inject(LinksService);

  ngOnInit(): void {
    this.options = this.linksSvc.getOptions();
  }
}
