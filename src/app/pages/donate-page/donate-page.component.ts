import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { NgoLocationService } from "@api/services/ngo-location.service";
import { IDonationForm } from "@business/donation/donation-form/donation-form.model";
import { interval, ReplaySubject, Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-donate-page",
  templateUrl: "./donate-page.component.html",
  styleUrls: ["./donate-page.component.scss"],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonatePageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  donationForm: IDonationForm = {} as IDonationForm;
  private formConfig = new ReplaySubject<IDonationForm>(1);
  formConfig$ = this.formConfig.asObservable();
  isReady = false;
  locations: any[] = []

  constructor(
    private ngoLocationService: NgoLocationService,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.ngoLocationService.getLocations().pipe(takeUntil(this.unsubscribe$)).subscribe((locations) => {
      this.locations = locations;
      this.donationForm.locations = locations;
      this.formConfig.next(this.donationForm);
      this.isReady = true;
      this.ref.detectChanges();
    });

    interval(3000).pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.formConfig.next({
        locations: [],
        random: Math.random() * 100
      } as IDonationForm);
      this.ref.detectChanges();
      this.ref.markForCheck();
    });

    this.formConfig$.pipe(takeUntil(this.unsubscribe$)).subscribe((config) => {
      console.log('parent', config);
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  temp() {
    this.formConfig.next(this.donationForm);
  }
}
