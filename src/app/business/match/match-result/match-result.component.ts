import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMatch } from '@api/models/match.model';


@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchResultComponent implements OnInit {
  @Input() matches: IMatch[] = [];
  displayedColumns: string[] = [
    'name', 'quantity', 'energy', 'perPanelCost', 'totalPanelCost', 'transportCost', 'amount'
  ];
  dataSource?: IMatch[];
  constructor(
    private ref: ChangeDetectorRef,
    private router: Router) { }

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

  onChoose(): void {
    this.router.navigate(['/estimate']);
  }
}
