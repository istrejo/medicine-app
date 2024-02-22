import { Component, OnInit, inject } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  primengConfig = inject(PrimeNGConfig);
  title = 'medicine-app';

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
