import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { NgoLocationService } from "@api/services/ngo-location.service";
import { IDonationForm } from "@business/donation/donation-form/donation-form.model";
import { ReplaySubject, Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-donate-page",
  templateUrl: "./donate-page.component.html",
  styleUrls: ["./donate-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonatePageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  donationForm: IDonationForm = {} as IDonationForm;
  private formConfig = new ReplaySubject<IDonationForm>(1);
  formConfig$ = this.formConfig.asObservable();

  constructor(
    private ngoLocationService: NgoLocationService,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.ngoLocationService.getLocations().pipe(takeUntil(this.unsubscribe$)).subscribe((locations) => {
      this.donationForm.locations = locations;
      this.formConfig.next(this.donationForm);
      this.ref.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
