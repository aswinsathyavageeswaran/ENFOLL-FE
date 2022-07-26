import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

export interface IMatchResult {
  name: string;
  quantity: number;
  energy: number;
  perPanelCost: number | null;
  totalPanelCost: number;
  transportCost: number;
  amount: number;
}

const ELEMENT_DATA: IMatchResult[] = [
  { name: 'Jhon Doe', quantity: 8, energy: 2, perPanelCost: 0, totalPanelCost: 0, transportCost: 80, amount: 80 },
  { name: 'Jane Doe', quantity: 10, energy: 2, perPanelCost: 40, totalPanelCost: 400, transportCost: 20, amount: 420 },
  { name: 'Jack Doe', quantity: 5, energy: 1, perPanelCost: 50, totalPanelCost: 250, transportCost: 50, amount: 300 },
  { name: 'Total', quantity: 23, energy: 5, perPanelCost: 3.9, totalPanelCost: 650, transportCost: 150, amount: 800 },
];


@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchResultComponent implements OnInit {
  displayedColumns: string[] = [
    'name', 'quantity', 'energy', 'perPanelCost', 'totalPanelCost', 'transportCost', 'amount'
  ];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
