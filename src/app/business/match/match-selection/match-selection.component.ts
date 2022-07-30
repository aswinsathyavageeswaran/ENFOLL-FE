import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { IMatch } from '@api/models/match.model';

@Component({
  selector: 'app-match-selection',
  templateUrl: './match-selection.component.html',
  styleUrls: ['./match-selection.component.scss']
})
export class MatchSelectionComponent implements OnInit {
  @Input() matches: IMatch[] = [];
  displayedColumns: string[] = [
    'name', 'quantity', 'energy', 'perPanelCost', 'totalPanelCost', 'transportCost', 'amount'
  ];
  dataSource?: IMatch[];
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dataSource = [
      ...this.matches,
      {
        name: 'Total',
        noOfPanels: this.matches.reduce((acc, match) => acc + +match.noOfPanels, 0).toString(),
        energy: this.matches.reduce((acc, match) => acc + +match.energy, 0).toString(),
        panelCost: this.matches.reduce((acc, match) => acc + +match.panelCost, 0).toString(),
        transportCost: this.matches.reduce((acc, match) => acc + +match.transportCost, 0).toString(),
      } as IMatch
    ];
    this.ref.detectChanges();
  }
}
