import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        title: 'Inicio',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'admission',
        title: 'Ingresos',
        loadChildren: () =>
          import('./pages/admission/admission.module').then(
            (m) => m.AdmissionModule
          ),
      },
      {
        path: 'patients',
        title: 'Pacientes',
        loadChildren: () =>
          import('./pages/patients/patients.module').then(
            (m) => m.PatientsModule
          ),
      },
      {
        path: 'doctor-list',
        title: 'Lista de Médicos',
        loadChildren: () =>
          import('./pages/doctor-list/doctor-list.module').then(
            (m) => m.DoctorListModule
          ),
      },
      {
        path: 'medical-services',
        loadChildren: () =>
          import('./pages/medical-services/medical-services.module').then(
            (m) => m.MedicalServicesModule
          ),
      },
      {
        path: 'surgeries',
        loadChildren: () =>
          import('./pages/surgeries/surgeries.module').then(
            (m) => m.SurgeriesModule
          ),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
