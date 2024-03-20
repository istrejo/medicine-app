import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Table } from 'primeng/table';

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
export class DoctorListComponent implements OnInit {
  private fb = inject(FormBuilder);
  form!: FormGroup;
  doctors: Doctor[] = [
    {
      name: 'John Snow',
      speciality: 'Traumatología',
      id: '27919755',
      phoneNumber: '555-555-5555',
      email: 'doctor@gmail.com',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      speciality: 'Neurología',
      id: '1234567890',
      phoneNumber: '555-555-5555',
      email: 'doctor@gmail.com',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      speciality: 'Cirugía',
      id: '1234567890',
      phoneNumber: '555-555-5555',
      email: 'doctor@gmail.com',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      speciality: 'Traumatología',
      id: '1234567890',
      phoneNumber: '555-555-5555',
      email: 'doctor@gmail.com',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      speciality: 'Traumatología',
      id: '1234567890',
      phoneNumber: '555-555-5555',
      email: 'doctor@gmail.com',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      speciality: 'Traumatología',
      id: '1234567890',
      phoneNumber: '555-555-5555',
      email: 'doctor@gmail.com',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      speciality: 'Traumatología',
      id: '1234567890',
      phoneNumber: '555-555-5555',
      email: 'doctor@gmail.com',
      actions: 'Schedule Appointment',
    },
    {
      name: 'John Doe',
      speciality: 'Traumatología',
      id: '1234567890',
      phoneNumber: '555-555-5555',
      email: 'doctor@gmail.com',
      actions: 'Schedule Appointment',
    },
  ];

  ngOnInit(): void {
    this.initialForm();
  }

  initialForm() {
    this.form = this.fb.group({
      search: [''],
    });
  }

  clear(table: Table) {
    table.clear();
    this.form.reset();
  }
}
