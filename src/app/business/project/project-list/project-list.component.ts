import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

export interface IProject {
  name: string;
  date: string;
  energy: string;
  cost: number | string;
  status: string
}

const ELEMENT_DATA: IProject[] = [
  { name: 'Rustenburg Community', date: '01/01/2020', energy: '800', cost: '1.8M', status: 'Active' },
  { name: 'Vryheid Power', date: '01/01/2020', energy: '250', cost: '90k', status: 'Completed' },
];


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'date', 'energy', 'cost', 'status'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
