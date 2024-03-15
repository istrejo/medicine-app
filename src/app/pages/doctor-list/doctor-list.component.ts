import { Component } from '@angular/core';

interface Doctor {
  name: string;
  speciality: string;
  id: string;
  phoneNumber: string;
  email: string;
  actions: string;
}

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.scss',
})
export class DoctorListComponent {
  doctors: Doctor[] = [
    {
      name: 'John Snow',
      speciality: '2023-10-26',
      id: '1234567890',
      phoneNumber: '555-555-5555',
      email: 'Main email',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      speciality: '2023-10-26',
      id: '1234567890',
      phoneNumber: '555-555-5555',
      email: 'Main email',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      speciality: '2023-10-26',
      id: '1234567890',
      phoneNumber: '555-555-5555',
      email: 'Main email',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      speciality: '2023-10-26',
      id: '1234567890',
      phoneNumber: '555-555-5555',
      email: 'Main email',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      speciality: '2023-10-26',
      id: '1234567890',
      phoneNumber: '555-555-5555',
      email: 'Main email',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      speciality: '2023-10-26',
      id: '1234567890',
      phoneNumber: '555-555-5555',
      email: 'Main email',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      speciality: '2023-10-26',
      id: '1234567890',
      phoneNumber: '555-555-5555',
      email: 'Main email',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      speciality: '2023-10-26',
      id: '1234567890',
      phoneNumber: '555-555-5555',
      email: 'Main email',
      actions: 'Schedule Appointment',
    },
  ];
}
