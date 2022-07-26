import { KeyValue } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { IDonationForm } from "./donation-form.model";

@Component({
  selector: "app-donation-form",
  templateUrl: "./donation-form.component.html",
  styleUrls: ["./donation-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonationFormComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  @Input() config$?: Observable<IDonationForm>;
  config: IDonationForm = {
    locations: []
  } as IDonationForm;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (!this.config$) {
      throw new Error("DonationFormComponent: config$ is required");
    }

    this.config$.pipe(takeUntil(this.unsubscribe$)).subscribe((config) => {
      this.config = config;
      this.ref.detectChanges();
    });

    this.ref.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSubmit(): void { }
}
