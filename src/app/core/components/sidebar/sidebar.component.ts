import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SidebarOption } from '../../interfaces/sidebar.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
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
      title: 'Consfiguraciones',
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
          path: 'type-services',
          title: 'Tipos de Servicios',
          icon: 'mr-2 pi pi-server',
        },
        {
          path: 'type-surgeries',
          title: 'Tipos de Operaciones',
          icon: 'mr-2 pi pi-heart-fill',
        },
        {
          path: 'type-surgeries',
          title: 'Tipos de Operaciones',
          icon: 'mr-2 pi pi-home',
        },
      ],
    },
  ];
}
