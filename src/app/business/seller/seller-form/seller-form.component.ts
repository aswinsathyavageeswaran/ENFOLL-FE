import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.scss']
})
export class SellerFormComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  form = this.fb.group({
    quantity: [10],
    panelType: ['1'],
    energy: ['5'],
    agency: ['Star Project Services Private Ltd\n1847 Thomas St\nKwaZulu-Natal, South Africa'],
    isDonation: ['2'],
    pricePerPanel: [78],
    address: ['674 Doreen St\nRustenburg\nEastern Cape, South Africa'],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form.get('isDonation')?.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(value => {
      if (value === '1') {
        this.form.get('pricePerPanel')?.disable();
      } else {
        this.form.get('pricePerPanel')?.enable();
      }
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
