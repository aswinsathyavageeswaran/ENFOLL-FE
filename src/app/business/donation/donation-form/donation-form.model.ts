import { KeyValue } from "@angular/common";

export interface IDonationForm {
  locations: KeyValue<string, number>[];
  random: number;
}
