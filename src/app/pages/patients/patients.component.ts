import { Component } from '@angular/core';

interface Patient {
  name: string;
  orderDate: string;
  medicalRecord: string;
  phoneNumber: string;
  branch: string;
  information: string;
  actions: string;
}

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
})
export class PatientsComponent {
  patients: Patient[] = [
    {
      name: 'John Snow',
      orderDate: '2023-10-26',
      medicalRecord: '1234567890',
      phoneNumber: '555-555-5555',
      branch: 'Main Branch',
      information: 'New Patient',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      orderDate: '2023-10-26',
      medicalRecord: '1234567890',
      phoneNumber: '555-555-5555',
      branch: 'Main Branch',
      information: 'New Patient',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      orderDate: '2023-10-26',
      medicalRecord: '1234567890',
      phoneNumber: '555-555-5555',
      branch: 'Main Branch',
      information: 'New Patient',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      orderDate: '2023-10-26',
      medicalRecord: '1234567890',
      phoneNumber: '555-555-5555',
      branch: 'Main Branch',
      information: 'New Patient',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      orderDate: '2023-10-26',
      medicalRecord: '1234567890',
      phoneNumber: '555-555-5555',
      branch: 'Main Branch',
      information: 'New Patient',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      orderDate: '2023-10-26',
      medicalRecord: '1234567890',
      phoneNumber: '555-555-5555',
      branch: 'Main Branch',
      information: 'New Patient',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      orderDate: '2023-10-26',
      medicalRecord: '1234567890',
      phoneNumber: '555-555-5555',
      branch: 'Main Branch',
      information: 'New Patient',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      orderDate: '2023-10-26',
      medicalRecord: '1234567890',
      phoneNumber: '555-555-5555',
      branch: 'Main Branch',
      information: 'New Patient',
      actions: 'Schedule Appointment',
    },
  ];
}
