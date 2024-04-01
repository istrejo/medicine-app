import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Surgery } from '../../core/interfaces/surgery.interface';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-surgeries',
  templateUrl: './surgeries.component.html',
  styleUrl: './surgeries.component.scss',
})
export class SurgeriesComponent {
  private fb = inject(FormBuilder);
  form!: FormGroup;
  surgeries: Surgery[] = [
    {
      title: 'Apendicitis',
      price: 505561,
      priceUSD: 500,
      status: true,
      commission: 6,
    },
    {
      title: 'Hernia Humbilical',
      price: 251509.05,
      priceUSD: 500,
      status: false,
      commission: 20,
    },
    {
      title: 'Lapararoscopia',
      price: 505561,
      priceUSD: 500,
      status: false,
      commission: 50,
    },
    {
      title: 'Visita Hospitalaria',
      price: 505561,
      priceUSD: 500,
      status: true,
      commission: 6,
    },
    {
      title: 'colelitiasis',
      price: 505561,
      priceUSD: 500,
      status: true,
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
