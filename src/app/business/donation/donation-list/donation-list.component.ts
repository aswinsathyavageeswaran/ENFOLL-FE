import { ChangeDetectionStrategy, Component } from "@angular/core";

export interface IDonations {
  amount: string;
  date: string;
}

const ELEMENT_DATA: IDonations[] = [
  { amount: "$100", date: "12/12/2019" },
  { amount: "$200", date: "12/12/2020" },
  { amount: "$300", date: "12/12/2021" },
];

@Component({
  selector: "app-donation-list",
  templateUrl: "./donation-list.component.html",
  styleUrls: ["./donation-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonationListComponent {
  displayedColumns: string[] = ['amount', 'date', 'print'];
  dataSource = ELEMENT_DATA;
}
