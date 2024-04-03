import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Branche } from '../../core/interfaces/branche.interface';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.scss',
})
export class BranchesComponent {
  surgeries: Branche[] = [
    {
      title: 'HM San José',
      phoneNumber: '555-555-555',
    },
    {
      title: 'HM Plaza del Sol',
      phoneNumber: '555-555-555',
    },
    {
      title: 'HM Lindora',
      phoneNumber: '555-555-555',
    },
    {
      title: 'HM Lindora',
      phoneNumber: '555-555-555',
    },
    {
      title: 'HM Magna',
      phoneNumber: '555-555-555',
    },
  ];

  ngOnInit(): void {}
}
