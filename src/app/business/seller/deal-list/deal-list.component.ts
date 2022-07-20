import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

export interface IDeal {
  quantity: number;
  type: string;
  date: string;
  rate: string;
  status: string
}

const ELEMENT_DATA: IDeal[] = [
  { quantity: 1, type: "Buy", date: "12/12/2019", rate: "$100", status: "Pending" },
  { quantity: 2, type: "Sell", date: "12/12/2020", rate: "$200", status: "Pending" },
];


@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DealListComponent implements OnInit {
  displayedColumns: string[] = ['quantity', 'type', 'date', 'rate', 'status'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
