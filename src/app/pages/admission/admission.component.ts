import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Dropdown {
  name: string;
  code: string;
}

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.scss',
})
export class AdmissionComponent {
  assistance: boolean = false;
  form!: FormGroup;
  fb = inject(FormBuilder);
  ids: Dropdown[] = [
    { name: 'Tipo 1', code: '1' },
    { name: 'Tipo 2', code: '2' },
    { name: 'Tipo 3', code: '3' },
  ];

  clinicBranches: Dropdown[] = [
    { name: 'Sucursal 1', code: '1' },
    { name: 'Sucursal 2', code: '2' },
    { name: 'Sucursal 3', code: '3' },
  ];

  medicalService: Dropdown[] = [
    { name: 'Operación', code: '1' },
    { name: 'Tipo Consulta', code: '2' },
    { name: 'Control', code: '3' },
  ];

  doctors = [
    { name: 'Doctor 1', id: '1' },
    { name: 'Doctor 2', id: '2' },
    { name: 'Doctor 3', id: '3' },
  ];

  ngOnInit() {
    this.initialForm();
  }

  initialForm() {
    this.form = this.fb.group({
      date: [new Date(), [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      typeId: [''],
      id: [''],
      clinicBranche: [''],
      medicalService: [''],
      operation: [''],
      doctor: [''],
      assistance: [false],
      assistantDoctor: [''],
      priceInColones: [''],
      priceinDollars: [''],
    });
  }
}
