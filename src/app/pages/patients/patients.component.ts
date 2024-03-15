import { Component, OnInit, inject } from '@angular/core';
import { Table } from 'primeng/table';
import dayjs from 'dayjs';
import { DataService } from '../../core/services/data/data.service';

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
export class PatientsComponent implements OnInit {
  dataSvc = inject(DataService);
  search: string = '';
  date: string = '';

  customers!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];
  patients: Patient[] = [];

  representatives = [
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
  ];
  statuses = [
    { label: 'Unqualified', value: 'unqualified' },
    { label: 'Qualified', value: 'qualified' },
    { label: 'New', value: 'new' },
    { label: 'Negotiation', value: 'negotiation' },
    { label: 'Renewal', value: 'renewal' },
    { label: 'Proposal', value: 'proposal' },
  ];

  ngOnInit(): void {
    this.loading = true;
    this.dataSvc.getData().subscribe((res) => {
      console.log(res);
      this.patients = res;
      this.loading = false;
    });
  }

  clear(table: Table) {
    table.clear();
    this.search = '';
    this.date = '';
    this.selectedDate;
  }

  dateChange() {
    console.log(this.date);
  }

  get selectedDate() {
    const date = dayjs(this.date).format('MM/DD/YYYY');
    return date;
  }
}
