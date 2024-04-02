import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Table } from 'primeng/table';
import { Surgery } from '../../core/interfaces/surgery.interface';

interface Appointments {
  title: string;
  price: string | number;
  priceUSD: string | number;
  commission: string | number;
}

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentsComponent {
  private fb = inject(FormBuilder);
  form!: FormGroup;
  surgeries: Appointments[] = [
    {
      title: 'Apendicitis',
      price: 505561,
      priceUSD: 500,
      commission: 6,
    },
    {
      title: 'Hernia Humbilical',
      price: 251509.05,
      priceUSD: 500,
      commission: 20,
    },
    {
      title: 'Lapararoscopia',
      price: 505561,
      priceUSD: 500,
      commission: 50,
    },
    {
      title: 'Visita Hospitalaria',
      price: 505561,
      priceUSD: 500,
      commission: 6,
    },
    {
      title: 'colelitiasis',
      price: 505561,
      priceUSD: 500,
      commission: 6,
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
