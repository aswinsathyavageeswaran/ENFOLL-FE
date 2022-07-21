import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

export interface IProject {
  name: string;
  date: string;
  energy: string;
  cost: number;
  status: string
}

const ELEMENT_DATA: IProject[] = [
  { name: 'Project 1', date: '01/01/2020', energy: '80', cost: 100.00, status: 'Active' },
  { name: 'Project 2', date: '01/01/2020', energy: '80', cost: 100.00, status: 'InActive' },
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
