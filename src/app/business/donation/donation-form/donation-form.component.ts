import { KeyValue } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { IDonationForm } from "./donation-form.model";

@Component({
  selector: "app-donation-form",
  templateUrl: "./donation-form.component.html",
  styleUrls: ["./donation-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonationFormComponent implements OnInit, OnDestroy, OnChanges {
  private unsubscribe$ = new Subject<void>();

  @Input() config$?: Observable<IDonationForm>;
  @Input() locations: KeyValue<string, number>[] = [];
  config: IDonationForm = {
    locations: [],
    random: 0
  } as IDonationForm;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (!this.config$) {
      throw new Error("DonationFormComponent: config$ is required");
    }

    console.log(this.config$)

    this.config$.subscribe((config) => {
      console.log('child', config);
      this.config = config;
      this.ref.detectChanges();
    }).unsubscribe();

    this.ref.detectChanges();
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes.hasOwnProperty('config$')) {
      console.log('config changed', this.config$)
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSubmit(): void { }
}
