import { Injectable, inject } from '@angular/core';
import { SidebarOption } from '../../interfaces/sidebar.interface';
import { HttpClient } from '@angular/common/http';
import { Link } from '../../interfaces/link.interface';
import { Observable, delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LinksService {
  private http = inject(HttpClient);
  private linksURL: string = 'assets/data/links.json';
  sidebarOptions: SidebarOption[] = [
    {
      path: 'home',
      title: 'Inicio',
      icon: 'mr-2 pi pi-home ',
    },
    {
      path: 'admission',
      title: 'Ingresos',
      icon: 'mr-2 pi pi-users',
    },
    {
      path: 'reports',
      title: 'Reportes',
      icon: 'mr-2 pi pi-chart-line',
      atributes: {
        pStyleClass: '@next',
        enterClass: 'hidden',
        enterActiveClass: 'slidedown',
        leaveToClass: 'hidden',
        leaveActiveClass: 'slideup',
      },
      sub_options: [
        {
          path: 'patients',
          title: 'Pacientes',
          icon: 'mr-2 pi pi-users',
        },
        {
          path: 'revenue',
          title: 'Ingresos',
          icon: 'mr-2 pi pi-dollar',
        },
      ],
    },
    {
      path: 'settings',
      title: 'Configuraciones',
      icon: 'mr-2 pi pi-cog',
      atributes: {
        pStyleClass: '@next',
        enterClass: 'hidden',
        enterActiveClass: 'slidedown',
        leaveToClass: 'hidden',
        leaveActiveClass: 'slideup',
      },
      sub_options: [
        {
          path: 'doctor-list',
          title: 'Lista de medicos',
          icon: 'mr-2 pi pi-users',
        },
        {
          path: 'medical-services',
          title: 'Tipos de Servicios',
          icon: 'mr-2 pi pi-server',
        },
        {
          path: 'surgeries',
          title: 'Tipos de Operaciones',
          icon: 'mr-2 pi pi-heart-fill',
        },
        {
          path: 'appointments',
          title: 'Tipos de Consultas',
          icon: 'mr-2 pi pi-home',
        },
        {
          path: 'branches',
          title: 'Sucursales',
          icon: 'mr-2 pi pi-home',
        },
      ],
    },
  ];

  constructor() {}

  getLinks() {
    return this.http.get<Link[]>(this.linksURL);
  }
  getOptions() {
    return this.sidebarOptions;
  }

  searchItem(query: string): Observable<Link[]> {
    if (query === '') {
      return of([]);
    }
    return this.http.get<Link[]>(this.linksURL).pipe(
      map((data: Link[]) =>
        data.filter((link) =>
          link.title.toLowerCase().includes(query.toLowerCase())
        )
      ),
      delay(500)
    );
  }
}
