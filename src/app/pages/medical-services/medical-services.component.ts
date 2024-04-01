import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Table } from 'primeng/table';

interface Service {
  service: string;
  price: string | number;
  priceUSD: string | number;
  commission: string | number;
  actions?: any;
}

interface Commission {
  type: string;
  priceBase: string | number;
}

@Component({
  selector: 'app-medical-services',
  templateUrl: './medical-services.component.html',
  styleUrl: './medical-services.component.scss',
})
export class MedicalServicesComponent {
  private fb = inject(FormBuilder);
  form!: FormGroup;
  services: Service[] = [
    {
      service: 'Consulta',
      price: 12639.03,
      priceUSD: 25,
      commission: '6%',
      actions: 'Schedule Appointment',
    },
    {
      service: 'Consulta',
      price: 12639.03,
      priceUSD: 25,
      commission: '6%',
      actions: 'Schedule Appointment',
    },
    {
      service: 'Consulta',
      price: 12639.03,
      priceUSD: 25,
      commission: '6%',
      actions: 'Schedule Appointment',
    },
    {
      service: 'Consulta',
      price: 12639.03,
      priceUSD: 25,
      commission: '6%',
      actions: 'Schedule Appointment',
    },
  ];

  Commissions: Commission[] = [
    {
      type: 'servicio profesional',
      priceBase: 600,
    },
    {
      type: 'otros serviceio',
      priceBase: 600,
    },
    {
      type: 'otro servicio',
      priceBase: 600,
    },
    {
      type: 'servicio profesional',
      priceBase: 600,
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
